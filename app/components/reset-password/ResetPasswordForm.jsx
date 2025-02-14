'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useCallback, useEffect, useState } from 'react';

// Component Imports:

import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import Input from '@/app/components/misc/input/Input';

// Context Imports:

import { useAlert } from '@/app/contexts/AlertProvider';

// Utils Imports:

import { showFieldState } from '@/app/utils/ui/show-field-state';
import { validateEmail } from '@/app/utils/input/email/validate-email';
import { validateUsernameLength } from '@/app/utils/input/username/validate-username-length';
import { validateUsernameSpecialCharacters } from "@/app/utils/input/username/validate-username-special-characters";
import { sendResetPasswordEmail } from "@/app/api/verify/send-reset-password-email";
import { maskEmail } from "@/app/utils/ui/mask-email";
import { VerificationErrorCode } from '@/app/error/verification/VerificationError';

// CSS Imports:

import '@/app/components/reset-password/ResetPasswordForm.css';

export default function ResetPasswordForm() {
    const { showAlert } = useAlert();
    const router = useRouter();

    // Form field states:
    const [formData, setFormData] = useState({
        identifier: ''
    });

    // Field visual states:
    const [fieldState, setFieldState] = useState({
        identifier: ''
    });

    // Validation states:
    const [validation, setValidation] = useState({
        isEmailValid: false,
        isUsernameValid: false
    });

    // UI states:
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    // Handle input changes:
    const handleInputChange = (event) => {
        const { value } = event.target;
        setFormData({ identifier: value.trim() });
    };

    // Form validation:
    const validateForm = useCallback(() => {
        const identifier = formData.identifier;
        const isEmailValid = validateEmail(identifier);
        const isUsernameValid = validateUsernameLength(identifier) &&
                                validateUsernameSpecialCharacters(identifier);

        setValidation({
            isEmailValid,
            isUsernameValid
        });
    }, [formData.identifier]);

    useEffect(() => {
        validateForm();
    }, [validateForm]);

    // Handle form submission:
    const handleFormSubmission = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            if (!formData.identifier) {
                console.error('Missing required fields.');
                showAlert('Please fill out all fields.', 'bad');
                showFieldState('identifier', setFieldState);
                return;
            }

            if (!validation.isEmailValid && !validation.isUsernameValid) {
                console.error('Invalid Username or Email format entered.');
                showAlert('Please enter a valid Email or Username.', 'bad');
                showFieldState('identifier', setFieldState);
                return;
            }

            const response = await sendResetPasswordEmail(formData.identifier);
            setIsSuccess(true);
            console.log('Successfully sent Password Reset request!');

            showFieldState('identifier', setFieldState, {
                state: 'success',
                duration: 2000,
                persist: true
            });

            setTimeout(() => {
                router.push(`/new-password?email=${encodeURIComponent(maskEmail(response.params?.email))}&username=${encodeURIComponent(response.params.username)}`);
            }, 2000);
        } catch (error) {
            console.error(error);
            let username, maskedEmail;
            switch (error.code) {
                case VerificationErrorCode.MISSING_FIELDS:
                    showAlert('Please fill out all fields.', 'bad');
                    error.requirements?.forEach(fieldId => {
                        showFieldState(fieldId, setFieldState);
                    });
                    break
                case VerificationErrorCode.INVALID_INPUT:
                    if (error.requirements === 'identifier') {
                        showAlert('Invalid input provided.', 'bad');
                        showFieldState('identifier', setFieldState);
                    }
                    break
                case VerificationErrorCode.INVALID_CREDENTIALS:
                    showAlert('User not found.', 'bad');
                    showFieldState('identifier', setFieldState);
                    break
                case VerificationErrorCode.CONFIRM_SIGN_UP:
                    username = error.params?.username;
                    maskedEmail = maskEmail(error.params?.email);
                    showAlert('Please complete verification.', 'bad');
                    showFieldState('identifier', setFieldState);
                    setIsError(true);
                    setTimeout(() => {
                        router.push(`/verify?email=${encodeURIComponent(maskedEmail)}&username=${encodeURIComponent(username)}`);
                    }, 2000);
                    break
                case VerificationErrorCode.RATE_LIMIT_EXCEEDED:
                    showAlert(`Too many attempts. Please try again later.`, 'bad');
                    showFieldState('identifier', setFieldState);
                    break
                case VerificationErrorCode.SERVER_ERROR:
                    showAlert('Internal server error. Please try again later.', 'bad');
                    showFieldState('identifier', setFieldState);
                    break
                default:
                    showAlert('An unknown error has occurred. Please try again later.', 'bad');
                    showFieldState('identifier', setFieldState);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = (validation.isEmailValid || validation.isUsernameValid) && !isLoading;

    return (
        <Form
            title="Enter Your Info"
            onSubmit={handleFormSubmission}
        >
            <p id="reset-password-instructions">
                We&apos;ll send an OTP to reset your password.
            </p>
            <Input
                id="account-identifier"
                autoComplete="username"
                value={formData.identifier}
                onChange={handleInputChange}
                placeholder="Username/Email"
                label="Username/Email"
                disabled={isLoading}
                state={fieldState.identifier}
            />
            <Button
                type="submit"
                loading={isLoading}
                success={isSuccess}
                error={isError}
                successText="Email sent!"
                disabled={!isFormValid}
            >
                Send
            </Button>
            <div id="back">
                <p onClick={() => router.push('/login')} id="back-to-login">
                    Back to Login
                </p>
            </div>
        </Form>
    )
}