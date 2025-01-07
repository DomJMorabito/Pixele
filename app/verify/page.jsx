'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import VerificationForm from "@/app/components/verify/VerificationForm";

// Utils Imports:

import { sendVerificationRequest } from "@/app/utils/api/verify/send-verification-request";
import { resendVerificationCode } from "@/app/utils/api/verify/resend-verification-code";

export default function VerifyPage({ searchParams }) {
    useEffect(() => {
        document.title = 'Verify | Pixele';
    }, []);

    // Makes sure that the background image is always set to the default whenever the page is loaded.
    useEffect(() => {

        document.body.classList.forEach(cls => {
            if (cls.endsWith('-background')) {
                document.body.classList.remove(cls);
            }
        });

        document.body.classList.add('register-background');

        return () => {
            document.body.classList.remove('register-background');
        }
    });
    return (
        <>
            <main>
                <VerificationForm
                    email = { searchParams.email }
                    username = { searchParams.username }
                    onSubmit={ sendVerificationRequest }
                    onResend={ resendVerificationCode }
                />
            </main>
        </>
    )
}