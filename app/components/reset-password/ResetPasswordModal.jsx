'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useEffect, useState } from 'react';

// Component Imports:

import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import Input from '@/app/components/misc/input/Input';

// Utils Imports:

import { showIndicator } from '@/app/utils/ui/show-indicator';
import { showFieldState } from '@/app/utils/ui/show-field-state';
import { validateEmail } from '@/app/utils/input/validate-email';
import { validateUsernameLength } from '@/app/utils/input/validate-username-length';
import { validateUsernameSpecialCharacters } from "@/app/utils/input/validate-username-special-characters";
import { sendResetPasswordEmail } from "@/app/utils/api/verify/send-reset-password-email";
import { VerificationErrorCode } from '@/app/utils/errors/verification/VerificationError';

// CSS Imports:

import '@/app/components/reset-password/ResetPasswordModal.css';

export default function ResetPasswordModal() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);

    useEffect(() => {
        const identifierInput = document.getElementById('account-identifier');

        const handleIdentifier = () => {
            const identifier = identifierInput.value.trim();
            setIsInputValid(validateEmail(identifier) || (validateUsernameLength(identifier) && validateUsernameSpecialCharacters(identifier)));
        }

        identifierInput.addEventListener('input', handleIdentifier);

        return () => {
            identifierInput.removeEventListener('input', handleIdentifier);
        }
    }, []);

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        const alertIndicator = document.getElementById('alert-indicator');
        const identifierInput = document.getElementById('account-identifier');
        const identifier = identifierInput.value.trim();

        setIsLoading(true);

        try {
            if (!identifier) {
                console.log('Missing required fields.');
                showIndicator('Please fill out all fields.', 'bad', alertIndicator);
                showFieldState(identifierInput);
                return;
            }

            const isEmail = validateEmail(identifier);
            const isUsername = validateUsernameLength(identifier) && validateUsernameSpecialCharacters(identifier);

            if (!isEmail && !isUsername) {
                console.error('Invalid Username or Email format entered.');
                showIndicator('Please enter a valid Email or Username.', 'bad', alertIndicator);
                showFieldState(identifierInput);
                return;
            }
            const response = await sendResetPasswordEmail(identifier);
            setIsSuccess(true);
            console.log('Successfully sent Password Reset request!');
            showFieldState(identifierInput, {
                duration: 2000,
                state: 'success',
                persist: true
            });
            setTimeout(() => {
                router.push(`/new-password?email=${encodeURIComponent(response.details.email)}&username=${encodeURIComponent(response.details.username)}`);
            }, 2000);
        } catch (error) {
            switch (error.code) {
                case VerificationErrorCode.MISSING_FIELDS:
                    console.error(error);
                    showIndicator('Please fill out all fields.', 'bad', alertIndicator);
                    showFieldState(identifierInput);
                    break
                case VerificationErrorCode.USER_NOT_FOUND:
                    console.error(error);
                    showIndicator('User not found.', 'bad', alertIndicator);
                    showFieldState(identifierInput);
                    break
                case VerificationErrorCode.EMAIL_SEND_FAILED:
                    console.error(error);
                    showIndicator('Failed to send email. Please try again later.', 'bad', alertIndicator);
                    showFieldState(identifierInput);
                    break
                case VerificationErrorCode.RATE_LIMIT_EXCEEDED:
                    console.error(error);
                    showIndicator(`Too many attempts. Please try again in ${error.details?.retryAfter || '30s'}.`, 'bad', alertIndicator);
                    showFieldState(identifierInput);
                    break
                case VerificationErrorCode.SERVER_ERROR:
                    console.error(error);
                    showIndicator('Internal server error. Please try again later.', 'bad', alertIndicator);
                    showFieldState(identifierInput);
                    break
                default:
                    console.error(error);
                    showIndicator('An unknown error has occurred, please try again later.', 'bad', alertIndicator);
                    showFieldState(identifierInput);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form
            title="Enter Your Info"
            onSubmit={handleFormSubmission}
        >
            <p id = "reset-password-instructions">
                We&apos;ll send instructions on how to reset your password.
            </p>
            <Input
                id="account-identifier"
                type="text"
                placeholder="Username/Email"
                label="Username/Email"
                disabled={isLoading}
            />
            <Button
                type="submit"
                loading={isLoading}
                success={isSuccess}
                successText="Email sent!"
                disabled={isLoading || !isInputValid}
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