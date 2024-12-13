'use client';

// React Imports:

import { createContext, useContext, useState, useEffect } from 'react';

// Utils Imports:

import { checkAuthStatus } from '@/app/utils/auth/check-auth-status';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        userInfo: { email: '', username: '' }
    });

    useEffect(() => {
        const status = checkAuthStatus();
        setAuthState(status);
    }, []);

    const refreshAuth = () => {
        const status = checkAuthStatus();
        setAuthState(status);
    };

    return (
        <AuthContext.Provider value={{ ...authState, refreshAuth }}>
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