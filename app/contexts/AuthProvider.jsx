'use client';

// React Imports:

import { createContext, useContext, useState, useEffect } from 'react';

// Utils Imports:

import { AuthErrorCode } from "@/app/utils/errors/auth/AuthError";
import { createErrorFromResponse } from "@/app/utils/errors/error-handler";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState({ username: '', email: '' });
    const [isLoading, setIsLoading] = useState(true);

    const checkAuthStatus = async () => {
        try {
            const response = await fetch('https://api.pixele.gg/users/check-auth', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const data = await response.json();

            if (!response.ok) {
                console.error('Auth check error:', data);
                switch (data.code) {
                    case AuthErrorCode.NO_SESSION:
                    case AuthErrorCode.SESSION_EXPIRED:
                    case AuthErrorCode.INVALID_SESSION:
                        setIsAuthenticated(false);
                        setUserInfo( { username: '', email: '' } )
                        break
                    case AuthErrorCode.RATE_LIMIT_EXCEEDED:
                        return
                }
                return;
            }

            setIsAuthenticated(true);
            setUserInfo(data.userInfo);
        } catch (error) {
            console.error('Auth check error:', error);
            setIsAuthenticated(false);
            setUserInfo({ username: '', email: '' });
            if (error.message === 'Failed to fetch.') {
                throw createErrorFromResponse(500, {
                    message: 'Unable to connect to the server. Please check your internet connection.',
                    code: 'NETWORK_ERROR'
                }, 'auth');
            }

            throw createErrorFromResponse(500, {
                message: 'An unknown error occurred.',
                code: 'UNKNOWN_ERROR'
            }, 'auth');
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