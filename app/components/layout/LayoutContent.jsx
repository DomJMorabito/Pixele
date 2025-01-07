'use client';

// Component Imports:

import NavBar from '@/app/components/nav-bar/NavBar';
import AlertIndicator from '@/app/components/alert-indicator/AlertIndicator';

// Context Imports:

import { AuthProvider } from "@/app/contexts/AuthProvider";
import { AlertProvider } from '@/app/contexts/AlertProvider'

export default function LayoutContent({ children }) {
    return (
        <AuthProvider>
            <AlertProvider>
                <AlertIndicator />
                <NavBar />
                {children}
            </AlertProvider>
        </AuthProvider>
    );
}