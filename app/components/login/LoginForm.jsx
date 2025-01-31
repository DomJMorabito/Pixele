'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useCallback, useState } from 'react';

// Component Imports:

import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import Input from '@/app/components/misc/input/Input';
import PasswordInput from '@/app/components/misc/password-input/PasswordInput';

// Context Imports:

import { useAlert } from '@/app/contexts/AlertProvider';

// Utils Imports:

import { sendLoginRequest } from '@/app/api/login/send-login-request';
import { showFieldState } from '@/app/utils/ui/show-field-state';
import { LoginErrorCode } from '@/app/utils/errors/login/LoginError';
import { parseCookies } from '@/app/utils/auth/parse-cookies';

// CSS Imports:

import '@/app/components/login/LoginForm.css';

export default function LoginForm() {
    const { showAlert } = useAlert();
    const router = useRouter();

    // Form field states:
    const [formData, setFormData] = useState({
        identifier: '',
        password: ''
    });

    // Field visual states:
    const [fieldState, setFieldState] = useState({
        identifier: '',
        password: ''
    });

    // UI states:
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    // Handle input changes:
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        const fieldId = id === 'username-email' ? 'identifier' : id;
        setFormData(prev => ({
            ...prev,
            [fieldId]: value.trim()
        }));
    };

    // Form validation:
    const isFormValid = useCallback(() => {
        return formData.identifier && formData.password;
    }, [formData]);

    // Handle form submission:
    const handleFormSubmission = async (event) => {
        event.preventDefault();
        const cookies = parseCookies();
        setIsLoading(true);
        setIsError(false);

        try {
            if (cookies['pixele_user']) {
                console.log('User already found.');
                showAlert('You are already logged in!', 'good');
                setIsSuccess(true);

                showFieldState('identifier', setFieldState, {
                    state: 'success',
                    duration: 2000,
                    persistent: true,
                });
                showFieldState('password', setFieldState, {
                    state: 'success',
                    duration: 2000,
                    persistent: true,
                });

                setTimeout(() => {
                    router.push('/');
                }, 2000);
                return;
            }

            const emptyFields = Object.entries(formData)
                .filter(([_, value]) => !value)
                .map(([fieldId]) => fieldId);

            if (emptyFields.length > 0) {
                console.error('Missing required fields:', emptyFields);
                showAlert('Please fill out all fields.', 'bad');
                emptyFields.forEach(fieldId => {
                    showFieldState(fieldId, setFieldState);
                });
                return;
            }

            await sendLoginRequest(formData.identifier, formData.password);
            setIsSuccess(true);
            console.log('Successfully sent Login request!');
            showFieldState('identifier', setFieldState, {
                state: 'success',
                duration: 2000,
                persistent: true,
            });
            showFieldState('password', setFieldState, {
                state: 'success',
                duration: 2000,
                persistent: true,
            });
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        } catch (error) {
            switch (error.code) {
                case LoginErrorCode.MISSING_FIELDS:
                    console.error(error);
                    showAlert('Please fill out all fields.', 'bad');
                    error.details.missingFields.forEach(fieldId => {
                        showFieldState(fieldId, setFieldState);
                    });
                    break
                case LoginErrorCode.INVALID_INPUT:
                    console.error(error);
                    showAlert('Invalid input provided.', 'bad');
                    if (error.details?.field) {
                        const fields = Array.isArray(error.details.field)
                            ? error.details.field
                            : [error.details.field];

                        fields.forEach(fieldId => {
                            showFieldState(fieldId, setFieldState);
                        });
                    }
                    break
                case LoginErrorCode.DATABASE_ERROR:
                    console.error(error);
                    showAlert('Could not complete login. Please try again later.', 'bad');
                    showFieldState('identifier', setFieldState);
                    showFieldState('password', setFieldState);
                    break
                case LoginErrorCode.AUTH_INCOMPLETE:
                    console.error(error);
                    if (error.details?.nextStep?.signInStep === 'CONFIRM_SIGN_UP') {
                        const username = error.details?.username || formData.identifier;
                        const email = error.details?.email || formData.identifier;
                        showAlert('Please Complete Verification.', 'bad');
                        showFieldState('identifier', setFieldState);
                        showFieldState('password', setFieldState);
                        setIsError(true);
                        setTimeout(() => {
                            router.push(`/verify?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`);
                        }, 2000);
                    } else if (error.details?.nextStep?.signInStep === 'RESET_PASSWORD') {
                        const username = error.details?.username || formData.identifier;
                        const email = error.details?.email || formData.identifier;
                        showAlert('Please reset password.', 'bad');
                        showFieldState('identifier', setFieldState);
                        showFieldState('password', setFieldState);
                        setTimeout(() => {
                            router.push(`/new-password?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`);
                        }, 2000);
                    } else if (error.details?.nextStep?.signInStep === 'CONFIRM_SIGN_IN_WITH_TOTP_CODE') {
                        const username = error.details?.username || formData.identifier;
                        const email = error.details?.email || formData.identifier;
                        showAlert('Enter code found on authentication app.', 'bad');
                        showFieldState('identifier', setFieldState);
                        showFieldState('password', setFieldState);
                        setIsError(true);
                        setTimeout(() => {
                            router.push(`/verify?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`);
                        }, 2000);
                    } else if (error.details?.nextStep?.signInStep === 'CONFIRM_SIGN_IN_WITH_EMAIL_CODE') {
                        const username = error.details?.username || formData.identifier;
                        const email = error.details?.email || formData.identifier;
                        showAlert('Enter code sent to your email.', 'bad');
                        showFieldState('identifier', setFieldState);
                        showFieldState('password', setFieldState);
                        setIsError(true);
                        setTimeout(() => {
                            router.push(`/verify?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`);
                        }, 2000);
                    } else {
                        showAlert('An unknown error has occurred. Please try again later.', 'bad');
                        showFieldState('identifier', setFieldState);
                        showFieldState('password', setFieldState);
                    }
                    break
                case LoginErrorCode.AUTH_COMPLETION_FAILED:
                    console.error(error);
                    showAlert('Login failed. Please try again.', 'bad');
                    showFieldState('identifier', setFieldState);
                    showFieldState('password', setFieldState);
                    break
                case LoginErrorCode.TOKEN_UNAVAILABLE:
                    console.error(error)
                    showAlert('No access token available after authentication.', 'bad');
                    showFieldState('identifier', setFieldState);
                    showFieldState('password', setFieldState);
                    break
                case LoginErrorCode.USER_NOT_FOUND:
                    console.error(error);
                    showAlert('No account associated with this Email/Username:', 'bad');
                    showFieldState('identifier', setFieldState);
                    break
                case LoginErrorCode.INVALID_CREDENTIALS:
                    console.error(error);
                    showAlert('Email/Username or Password is incorrect.', 'bad');
                    showFieldState('identifier', setFieldState);
                    showFieldState('password', setFieldState);
                    break
                case LoginErrorCode.RATE_LIMIT_EXCEEDED:
                    console.error(error);
                    showAlert('Too many attempts. Please try again later.', 'bad');
                    showFieldState('identifier', setFieldState);
                    showFieldState('password', setFieldState);
                    break
                case LoginErrorCode.SERVER_ERROR:
                    console.error(error);
                    showAlert('Internal server error. Please try again later.', 'bad');
                    showFieldState('identifier', setFieldState);
                    showFieldState('password', setFieldState);
                    break
                default:
                    console.error(error);
                    showAlert('An unknown error has occurred. Please try again later.', 'bad');
                    showFieldState('identifier', setFieldState);
                    showFieldState('password', setFieldState);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form
            title="Get Back In There!"
            onSubmit={handleFormSubmission}
            className="login-form"
        >
            <Input
                id="username-email"
                autoComplete="username"
                value={formData.identifier}
                onChange={handleInputChange}
                placeholder="Username or Email"
                label="Username/Email"
                disabled={isLoading}
                state={fieldState.identifier}
            />
            <PasswordInput
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                label="Password"
                disabled={isLoading}
                state={fieldState.password}
            />
            <Button
                type="submit"
                loading={isLoading}
                success={isSuccess}
                error={isError}
                successText="Welcome!"
                disabled={!isFormValid() || isLoading}
            >
                Login
            </Button>
            <div id="login-form-links">
                <p onClick={() => router.push('/reset-password')} className="login-form-link">
                    Forgot Password?
                </p>
                <span id="login-link-divider">|</span>
                <p onClick={() => router.push('/register')} className="login-form-link">
                    Sign Up!
                </p>
            </div>
        </Form>
    )
}