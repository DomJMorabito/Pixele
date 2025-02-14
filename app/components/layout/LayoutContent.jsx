'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import NavBar from '@/app/components/nav-bar/NavBar';
import AlertIndicator from '@/app/components/alert-indicator/AlertIndicator';

// Context Imports:

import { AuthProvider } from "@/app/contexts/AuthProvider";
import { AlertProvider } from '@/app/contexts/AlertProvider'
import { BackgroundProvider } from '@/app/contexts/BackgroundProvider';

export default function LayoutContent({ children }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.history.scrollRestoration = 'manual';
            requestAnimationFrame(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'instant'
                });
            });
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, []);

    return (
        <AuthProvider>
            <AlertProvider>
                <AlertIndicator />
                <BackgroundProvider>
                    <NavBar />
                    {children}
                </BackgroundProvider>
            </AlertProvider>
        </AuthProvider>
    );
}