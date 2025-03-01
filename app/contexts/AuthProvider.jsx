'use client';

// Next.js Imports:

import { usePathname } from "next/navigation";

// React Imports:

import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

// Utils Imports:

import { AuthErrorCode } from "@/app/error/auth/AuthError";
import { debounce } from '@/app/utils/ui/debounce';

const AuthContext = createContext();

const PUBLIC_PATHS = ['/register', '/verify', '/reset-password', '/new-password', '/login'];

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState({ username: '', email: '' });
    const [isLoading, setIsLoading] = useState(true);
    const isCheckingAuth = useRef(false);
    const pathname = usePathname();

    const isPublicPath = useCallback((path) => {
        return PUBLIC_PATHS.some(publicPath => path.startsWith(publicPath));
    }, []);

    const checkAuthStatus = useCallback(async () => {
        if (isCheckingAuth.current) return;
        isCheckingAuth.current = true;
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
                switch (data.code) {
                    case AuthErrorCode.NO_SESSION:
                    case AuthErrorCode.SESSION_EXPIRED:
                    case AuthErrorCode.INVALID_SESSION:
                        setIsAuthenticated(false);
                        setUserInfo({ username: '', email: '' });
                        return;
                    case AuthErrorCode.RATE_LIMIT_EXCEEDED:
                        return;
                    default:
                        console.error('Auth check error:', data);
                        return;
                }
            }

            setIsAuthenticated(true);
            setUserInfo(data.userInfo);
        } catch (error) {
            if (error.message === 'Failed to fetch' && error.name !== 'AbortError') {
                setIsAuthenticated(false);
                setUserInfo({ username: '', email: '' });
            } else {
                console.error('Auth check error:', error);
            }
        } finally {
            isCheckingAuth.current = false;
        }
    }, []);

    useEffect(() => {
        const originalPushState = window.history.pushState;
        let authCheckInterval;
        let isInitializing = true;

        const debouncedHandleRouteChange = debounce(() => {
            if (!isPublicPath(window.location.pathname) && !isInitializing) {
                checkAuthStatus();
            }
        }, 100);

        const setupListeners = () => {
            window.addEventListener('popstate', debouncedHandleRouteChange);
            window.history.pushState = function() {
                originalPushState.apply(this, arguments);
                debouncedHandleRouteChange();
            };
            authCheckInterval = setInterval(checkAuthStatus, 15 * 60 * 1000);
        };

        const cleanupListeners = () => {
            window.removeEventListener('popstate', debouncedHandleRouteChange);
            window.history.pushState = originalPushState;
            if (authCheckInterval) {
                clearInterval(authCheckInterval);
            }
            debouncedHandleRouteChange.cancel();
        };

        const initialize = async () => {
            if (!isPublicPath(pathname)) {
                await checkAuthStatus();
                isInitializing = false;
                setupListeners();
            } else {
                isInitializing = false;
            }
            setIsLoading(false);
        };

        initialize();

        return () => {
            cleanupListeners();
        }
    }, [pathname, isPublicPath, checkAuthStatus]);

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