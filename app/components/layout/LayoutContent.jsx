'use client';

// Component Imports:

import NavBar from '@/app/components/nav-bar/NavBar';
import AlertIndicator from '@/app/components/alert-indicator/AlertIndicator';

// Context Imports:

import { AuthProvider } from "@/app/contexts/AuthProvider";

export default function LayoutContent({ children }) {
    return (
        <AuthProvider>
            <AlertIndicator />
            <NavBar />
            {children}
        </AuthProvider>
    );
}