'use client';

// Next.js Imports:

import { usePathname } from "next/navigation";

// React Imports:

import { createContext, useContext, useState, useEffect } from 'react';

// Utils Imports:

import { AuthErrorCode } from "@/app/utils/errors/auth/AuthError";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState({ username: '', email: '' });
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    const shouldSkipAuthCheck = () => {
        const publicPaths = ['/register', '/verify', '/reset-password', '/new-password'];
        return publicPaths.some(path => pathname.startsWith(path));
    }

    const checkAuthStatus = async () => {
        if (shouldSkipAuthCheck()) {
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('https://api.pixele.gg/users/check-auth', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                signal: new AbortController().signal
            });

            const data = await response.json();

            if (!response.ok) {
                switch (data.code) {
                    case AuthErrorCode.NO_SESSION:
                    case AuthErrorCode.SESSION_EXPIRED:
                    case AuthErrorCode.INVALID_SESSION:
                        setIsAuthenticated(false);
                        setUserInfo( { username: '', email: '' } )
                        return
                    case AuthErrorCode.RATE_LIMIT_EXCEEDED:
                        return
                    default:
                        console.error('Auth check error:', data);
                        return
                }
            }

            setIsAuthenticated(true);
            setUserInfo(data.userInfo);
        } catch (error) {
            if (error.message === 'Failed to fetch.' && error.message !== 'AbortError') {
                setIsAuthenticated(false);
                setUserInfo({ username: '', email: '' });
            } else {
                console.error('Auth check error:', error);
            }
        }
    }

    useEffect(() => {
        const initAuth = async () => {
            await checkAuthStatus();
            setIsLoading(false);
        };

        initAuth();
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            checkAuthStatus();
        }

        window.addEventListener('popstate', handleRouteChange);

        const originalPushState = window.history.pushState;
        window.history.pushState = function () {
            originalPushState.apply(this, arguments);
            handleRouteChange();
        };

        const interval = setInterval(checkAuthStatus, 15 * 60 * 1000);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
            window.history.pushState = originalPushState;
            clearInterval(interval);
        };
    }, [])

    const refreshAuth = async () => {
        await checkAuthStatus();
    };

    const value = {
        isAuthenticated,
        userInfo,
        isLoading,
        refreshAuth
    }

    if (isLoading) return null;

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}