'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useState } from 'react';

// Component Imports:

import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import Input from '@/app/components/misc/input/Input';

// Utils Imports:

import { showIndicator } from '@/app/utils/ui/show-indicator';
import { showFieldState } from '@/app/utils/ui/show-field-state';
import { validateEmail } from '@/app/utils/input/validate-email';
import { sendResetPasswordEmail } from "@/app/utils/api/verify/send-reset-password-email";
import { VerificationErrorCode } from '@/app/utils/errors/verification/VerificationError';

// CSS Imports:

import '@/app/components/reset-password/ResetPasswordModal.css';

export default function ResetPasswordModal() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        const alertIndicator = document.getElementById('alert-indicator');
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();

        setIsLoading(true);

        try {
            await sendResetPasswordEmail(email);
            setIsSuccess(true);
            showIndicator('Check your email for a link to reset password!', 'good', alertIndicator);
            showFieldState(emailInput, {
                duration: 2000,
                state: 'success',
                persist: true
            });
        } catch (error) {
            switch (error.code) {
                case VerificationErrorCode.MISSING_FIELDS:
                    showIndicator('Missing required fields.', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    break
                case VerificationErrorCode.USER_NOT_FOUND:
                    showIndicator('User not found.', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    break
                case VerificationErrorCode.EMAIL_SEND_FAILED:
                    showIndicator('Failed to send email. Please try again later.', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    break
                case VerificationErrorCode.RATE_LIMIT_EXCEEDED:
                    showIndicator(`Too many attempts. Please try again in ${error.details?.retryAfter || '30s'}.`, 'bad', alertIndicator);
                    showFieldState(emailInput);
                    break
                case VerificationErrorCode.SERVER_ERROR:
                    showIndicator('Internal server error. Please try again later.', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    break
                default:
                    console.error('Error verifying:', error);
                    showIndicator('An unknown error has occurred, please try again later.', 'bad', alertIndicator);
                    showFieldState(emailInput);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form
            title="Enter Your Email"
            onSubmit={handleFormSubmission}
        >
            <p id = "reset-password-instructions">
                We&apos;ll send instructions on how to reset your password.
            </p>
            <Input
                id="email"
                type="email"
                placeholder="Enter your Email"
                label="Email"
                disabled={isLoading}
            />
            <Button
                type="submit"
                loading={isLoading}
                success={isSuccess}
                disabled={isLoading || !isEmailValid}
            >
                Send
            </Button>
            <div id = "back">
                <p onClick={() => router.push('/login')} id="back-to-login">
                    Back to Login
                </p>
            </div>
        </Form>
    )
}