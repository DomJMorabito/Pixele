'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import VerificationForm from "@/app/components/verify/VerificationForm";

// Utils Imports:

import { confirmNewPassword } from '@/app/utils/api/verify/confirm-new-password';
import { sendResetPasswordEmail } from "@/app/utils/api/verify/send-reset-password-email";

export default function NewPasswordPage({ searchParams }) {
    useEffect(() => {
        document.title = 'New Password | Pixele';
    }, []);

    // Makes sure that the background image is always set to the default whenever the page is loaded.
    useEffect(() => {

        document.body.classList.forEach(cls => {
            if (cls.endsWith('-background')) {
                document.body.classList.remove(cls);
            }
        });

        document.body.classList.add('login-background');

        return () => {
            document.body.classList.remove('login-background');
        }
    });
    return (
        <>
            <main>
                <VerificationForm
                    email={ searchParams.email }
                    username={ searchParams.username }
                    isPasswordReset={ true }
                    onSubmit={confirmNewPassword}
                    onResend={sendResetPasswordEmail}
                />
            </main>
        </>
    )
}