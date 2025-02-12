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

import { sendVerificationRequest } from "@/app/api/verify/send-verification-request";
import { resendVerificationCode } from "@/app/api/verify/resend-verification-code";

export default function VerifyPage() {
    const { setBackground } = useBackground();
    const searchParams = useSearchParams();

    const decodedEmail = decodeURIComponent(searchParams.get('email') || '');
    const decodedUsername = decodeURIComponent(searchParams.get('username') || '');

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