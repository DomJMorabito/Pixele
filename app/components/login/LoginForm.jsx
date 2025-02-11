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
import { maskEmail } from '@/app/utils/ui/mask-email';
import { LoginErrorCode } from '@/app/utils/errors/login/LoginError';

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
        setIsLoading(true);
        setIsError(false);

        try {
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
            let username, maskedEmail;
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
                case LoginErrorCode.INVALID_CREDENTIALS:
                    console.error(error);
                    showAlert('Email/Username or Password is incorrect.', 'bad');
                    showFieldState('identifier', setFieldState);
                    showFieldState('password', setFieldState);
                    break
                case LoginErrorCode.CONFIRM_SIGN_UP:
                    username = error.details?.username;
                    maskedEmail = maskEmail(error.details?.email);
                    showAlert('Please complete verification.', 'bad');
                    showFieldState('identifier', setFieldState);
                    showFieldState('password', setFieldState);
                    setIsError(true);
                    setTimeout(() => {
                        router.push(`/verify?email=${encodeURIComponent(maskedEmail)}&username=${encodeURIComponent(username)}`);
                    }, 2000);
                    break
                case LoginErrorCode.DATABASE_ERROR:
                    console.error(error);
                    showAlert('Could not complete login. Please try again later.', 'bad');
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