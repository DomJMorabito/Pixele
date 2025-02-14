'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import RegistrationForm from "@/app/components/register/RegistrationForm";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function RegisterPage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'Pixele - Create Account';
        setBackground(backgrounds.register);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <RegistrationForm />
            </main>
        </>
    );
}