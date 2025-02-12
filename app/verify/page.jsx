'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import VerificationForm from "@/app/components/verify/VerificationForm";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

// Utils Imports:

import { sendVerificationRequest } from "@/app/api/verify/send-verification-request";
import { resendVerificationCode } from "@/app/api/verify/resend-verification-code";

export default function VerifyPage({ searchParams }) {
    const { setBackground } = useBackground();

    const decodedEmail = searchParams.email ? decodeURIComponent(searchParams.email) : '';
    const decodedUsername = searchParams.username ? decodeURIComponent(searchParams.username) : '';

    useEffect(() => {
        document.title = 'Verify | Pixele';
        setBackground(backgrounds.register);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <VerificationForm
                    email = { decodedEmail }
                    username = { decodedUsername }
                    onSubmit={ sendVerificationRequest }
                    onResend={ resendVerificationCode }
                />
            </main>
        </>
    )
}