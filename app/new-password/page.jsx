'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import VerificationForm from "@/app/components/verify/VerificationForm";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

// Utils Imports:

import { confirmNewPassword } from '@/app/api/verify/confirm-new-password';
import { sendResetPasswordEmail } from "@/app/api/verify/send-reset-password-email";

export default function NewPasswordPage({ searchParams }) {
    const { setBackground } = useBackground();

    const decodedEmail = searchParams.email ? decodeURIComponent(searchParams.email) : '';
    const decodedUsername = searchParams.username ? decodeURIComponent(searchParams.username) : '';

    useEffect(() => {
        document.title = 'New Password | Pixele';
        setBackground(backgrounds.login);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <VerificationForm
                    email={ decodedEmail }
                    username={ decodedUsername }
                    isPasswordReset={ true }
                    onSubmit={confirmNewPassword}
                    onResend={sendResetPasswordEmail}
                />
            </main>
        </>
    )
}