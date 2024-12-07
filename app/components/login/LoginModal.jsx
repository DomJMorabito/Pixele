'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useEffect, useState } from 'react';

// Component Imports:

import AlertIndicator from '@/app/components/alert-indicator/AlertIndicator';
import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import Input from '@/app/components/misc/input/Input';
import PasswordInput from '@/app/components/misc/password-input/PasswordInput';

// Utils Imports:

import { showIndicator } from '@/app/utils/ui/show-indicator';
import { validateInputs } from '@/app/utils/input/validate-inputs';
import { sendLoginRequest } from '@/app/utils/api/login/send-login-request';
import { showFieldState } from '@/app/utils/ui/show-field-state';
import { LoginErrorCode } from '@/app/utils/errors/login/LoginError';

// CSS Imports:

import '@/app/components/login/LoginModal.css';

export default function LoginModal() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const usernameEmailInput = document.getElementById('username-email');
        const passwordInput = document.getElementById('password');

        const handleInputChange = () => {
            setIsFormValid(validateInputs(usernameEmailInput, passwordInput));
        };

        usernameEmailInput.addEventListener('input', handleInputChange);
        passwordInput.addEventListener('input', handleInputChange);

        return () => {
            usernameEmailInput.removeEventListener('input', handleInputChange);
            passwordInput.removeEventListener('input', handleInputChange);
        }
    }, [router]);

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setIsError(false);
        const usernameEmailInput = document.getElementById('username-email');
        const passwordInput = document.getElementById('password');
        const alertIndicator = document.getElementById('alert-indicator');
        const identifier = usernameEmailInput.value.trim();
        const password = passwordInput.value.trim();

        try {
            await sendLoginRequest(identifier, password);
            setIsSuccess(true);
            const inputs = [usernameEmailInput, passwordInput];
            inputs.forEach(input => {
                showFieldState(input, {
                    duration: 2000,
                    state: 'success',
                    persist: true
                });
            });
            setTimeout(() => {
                router.push('/');
            }, 2000);
        } catch (error) {
            switch (error.code) {
                case LoginErrorCode.MISSING_FIELDS:
                    showIndicator('Missing required fields.', 'bad', alertIndicator);
                    error.details.missingFields.forEach(field => {
                        const input = document.getElementById(field);
                        if (input) {
                            showFieldState(input);
                        }
                    });
                    break
                case LoginErrorCode.AUTH_INCOMPLETE:
                    if (error.details?.nextStep?.signInStep === 'CONFIRM_SIGN_UP') {
                        const username = error.details?.username || identifier;
                        const email = error.details?.email || identifier;
                        showIndicator('Please Complete Verification.', 'bad', alertIndicator);
                        showFieldState(usernameEmailInput);
                        showFieldState(passwordInput);
                        setIsError(true);
                        setTimeout(() => {
                            router.push(`/verify?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`);
                        }, 2000);
                    } else if (error.details?.nextStep?.signInStep === 'RESET_PASSWORD') {
                        showIndicator('Please reset password.', 'bad', alertIndicator);
                        showFieldState(usernameEmailInput);
                        showFieldState(passwordInput);
                        // redirect to reset password page.
                    } else if (error.details?.nextStep?.signInStep === 'CONFIRM_SIGN_IN_WITH_TOTP_CODE') {
                        const username = error.details?.username || identifier;
                        const email = error.details?.email || identifier;
                        showIndicator('Enter code found on authentication app.', 'bad', alertIndicator);
                        showFieldState(usernameEmailInput);
                        showFieldState(passwordInput);
                        setIsError(true);
                        setTimeout(() => {
                            router.push(`/verify?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`);
                        }, 2000);
                    } else if (error.details?.nextStep?.signInStep === 'CONFIRM_SIGN_IN_WITH_EMAIL_CODE') {
                        const username = error.details?.username || identifier;
                        const email = error.details?.email || identifier;
                        showIndicator('Enter code sent to your email.', 'bad', alertIndicator);
                        showFieldState(usernameEmailInput);
                        showFieldState(passwordInput);
                        setIsError(true);
                        setTimeout(() => {
                            router.push(`/verify?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`);
                        }, 2000);
                    } else {
                        showIndicator('An unknown error has occurred. Please try again later.', 'bad', alertIndicator);
                        showFieldState(usernameEmailInput);
                        showFieldState(passwordInput);
                    }
                    break
                case LoginErrorCode.AUTH_COMPLETION_FAILED:
                    showIndicator('Login failed. Please try again.', 'bad', alertIndicator);
                    showFieldState(usernameEmailInput);
                    showFieldState(passwordInput);
                    break
                case LoginErrorCode.TOKEN_UNAVAILABLE:
                    showIndicator('No access token available after authentication.', 'bad', alertIndicator);
                    showFieldState(usernameEmailInput);
                    showFieldState(passwordInput);
                    break
                case LoginErrorCode.USER_NOT_FOUND:
                    showIndicator('No account associated with this Email/Username.', 'bad', alertIndicator);
                    showFieldState(usernameEmailInput);
                    break
                case LoginErrorCode.INVALID_CREDENTIALS:
                    showIndicator('Email/Username or Password is incorrect.', 'bad', alertIndicator);
                    showFieldState(passwordInput);
                    break
                case LoginErrorCode.RATE_LIMIT_EXCEEDED:
                    showIndicator('Too many attempts. Please try again later.', 'bad', alertIndicator);
                    showFieldState(usernameEmailInput);
                    showFieldState(passwordInput);
                    break
                case LoginErrorCode.SERVER_ERROR:
                    showIndicator('Internal server error. Please try again later.', 'bad', alertIndicator);
                    showFieldState(usernameEmailInput);
                    showFieldState(passwordInput);
                    break
                default:
                    console.error('Error logging in:', error);
                    showIndicator('An unknown error has occurred, please try again later.', 'bad', alertIndicator);
                    showFieldState(usernameEmailInput);
                    showFieldState(passwordInput);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AlertIndicator />
            <Form
                title="Get Back In There!"
                onSubmit={handleFormSubmission}
                className="login-form"
            >
                <Input
                    id="username-email"
                    placeholder="Username or Email"
                    label="Username/Email"
                />
                <PasswordInput
                    id="password"
                    placeholder="Password"
                    label="Password"
                />
                <Button
                    type="submit"
                    loading={isLoading}
                    success={isSuccess}
                    error={isError}
                    successText="Welcome!"
                    disabled={!isFormValid || isLoading}
                >
                    Login
                </Button>
            </Form>
        </>
    );
}