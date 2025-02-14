'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import LoginForm from '@/app/components/login/LoginForm';

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function LoginPage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'Pixele - Login';
        setBackground(backgrounds.login);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <LoginForm />
            </main>
        </>
    );
}