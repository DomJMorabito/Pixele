'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import ResetPasswordForm from '@/app/components/reset-password/ResetPasswordForm';

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function ResetPasswordPage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'Pixele - Reset Password';
        setBackground(backgrounds.login);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <ResetPasswordForm />
            </main>
        </>
    );
}