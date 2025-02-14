'use client';

// Next.js Imports:

import { useSearchParams } from "next/navigation";

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import VerificationForm from "@/app/components/verify/VerificationForm";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

// Utils Imports:

import { confirmNewPassword } from '@/app/api/verify/confirm-new-password';
import { sendResetPasswordEmail } from "@/app/api/verify/send-reset-password-email";

export default function NewPasswordPage() {
    const { setBackground } = useBackground();
    const searchParams = useSearchParams();

    const decodedEmail = decodeURIComponent(searchParams.get('email') || '');
    const decodedUsername = decodeURIComponent(searchParams.get('username') || '');

    useEffect(() => {
        document.title = 'Pixele - Choose New Password';
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