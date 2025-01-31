'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useCallback, useEffect, useState, useRef } from 'react';

// Component Imports:

import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import CodeInput from '@/app/components/misc/code-input/CodeInput';
import PasswordInput from "@/app/components/misc/password-input/PasswordInput";
import InputRequirements from "@/app/components/misc/input-requirements/InputRequirements";

// Context Imports:

import { useAlert } from '@/app/contexts/AlertProvider';

// Utils Imports:

import { VerificationErrorCode } from '@/app/utils/errors/verification/VerificationError';
import { validatePasswordLength } from "@/app/utils/input/validate-password-length";
import { validatePasswordNumbers } from "@/app/utils/input/validate-password-numbers";
import { validatePasswordSpecialCharacters } from "@/app/utils/input/validate-password-special-characters";
import { validatePassword } from "@/app/utils/input/validate-password";
import { showFieldState } from "@/app/utils/ui/show-field-state";

// CSS Imports:

import '@/app/components/verify/VerificationForm.css';

export default function VerificationForm({
    email,
    username,
    isPasswordReset = false,
    onSubmit,
    onResend
}) {
    const { showAlert } = useAlert();
    const router = useRouter();
    const inputRefs = useRef([]);

    // Form field states:
    const [formData, setFormData] = useState({
        code: new Array(6).fill(''),
        password: '',
        confirmPassword: ''
    });

    // Field visual states:
    const [fieldState, setFieldState] = useState({
        code: '',
        password: '',
        confirmPassword: ''
    });

    // Validation states:
    const [validation, setValidation] = useState({
        isPasswordValid: false,
        passwordsMatch: false,
        passwordHasSpecialChar: false,
        passwordIsValidLength: false,
        passwordHasNumber: false
    });

    // UI states:
    const [timer, setTimer] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isResendLoading, setIsResendLoading] = useState(false);

    // Form validation:
    const validateForm = useCallback(() => {
        if (isPasswordReset) {
            const passwordsMatch = formData.password &&
                formData.confirmPassword &&
                formData.password === formData.confirmPassword;

            const passwordIsValidLength = validatePasswordLength(formData.password);
            const passwordHasNumber = validatePasswordNumbers(formData.password);
            const passwordHasSpecialChar = validatePasswordSpecialCharacters(formData.password);
            const isPasswordValid = validatePassword(
                passwordHasNumber,
                passwordHasSpecialChar,
                passwordIsValidLength
            );

            setValidation({
                isPasswordValid,
                passwordsMatch,
                passwordHasSpecialChar,
                passwordIsValidLength,
                passwordHasNumber
            });
        }
    }, [formData, isPasswordReset]);

    useEffect(() => {
        validateForm();
    }, [validateForm]);

    // Timer:
    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
    }, [timer]);

    // Handle input changes:
    const handlePasswordChange = (event) => {
        const { id, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [id]: value.trim()
        }));
    };

    const handleCodeChange = (newCode) => {
        setFormData(prev => ({
            ...prev,
            code: newCode
        }));
    };

    // Handle resend code:
    const handleResendCode = async (event) => {
        event.preventDefault();
        if (timer > 0) return;
        setIsResendLoading(true);

        try {
            await onResend(username);
            setTimer(30);
            showAlert('Resent verification code.', 'good');
        } catch (error) {
            switch (error.code) {
                case VerificationErrorCode.RATE_LIMIT_EXCEEDED:
                    console.error('Please slow down.', error);
                    showAlert(`Too many attempts. Please try again later.`, 'bad');
                    break
                case VerificationErrorCode.USER_NOT_FOUND:
                    console.error('User not found.', error);
                    showAlert('User not found.', 'bad');
                    break
                case VerificationErrorCode.ALREADY_VERIFIED:
                    console.error('You are already verified!', error);
                    showAlert('Account already verified!', 'good');
                    setIsSuccess(true);
                    setTimeout(() => {
                        router.push('/login');
                    }, 2000);
                    break
                default:
                    showAlert('Failed to resend verification code.', 'bad');
            }
        } finally {
            setIsResendLoading(false);
        }
    };

    // Handle form submission:
    const handleFormSubmission = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const verificationCode = formData.code.join('');

        try {
            const requiredFields = isPasswordReset
                ? ['code', 'password', 'confirmPassword']
                : ['code'];

            const emptyFields = requiredFields.filter(fieldId => {
                if (fieldId === 'code') {
                    return formData.code.includes('');
                }
                return !formData[fieldId];
            });

            if (emptyFields.length > 0) {
                console.error('Missing required fields:', emptyFields);
                showAlert('Please fill out all fields.', 'bad');
                emptyFields.forEach(fieldId => {
                    showFieldState(fieldId, setFieldState);
                });
                return;
            }

            if (isPasswordReset) {
                if (!validation.isPasswordValid) {
                    console.error('Password is invalid.');
                    if (!validation.passwordIsValidLength) {
                        showAlert('Password must be between 8-15 characters.', 'bad');
                    } else if (!validation.passwordHasNumber) {
                        showAlert('Password must contain a number.', 'bad');
                    } else if (!validation.passwordHasSpecialChar) {
                        showAlert('Password must contain a special character.', 'bad');
                    }
                    showFieldState('password', setFieldState);
                    return;
                }

                if (!validation.passwordsMatch) {
                    console.error('Passwords do not match.');
                    showAlert('Passwords do not match.', 'bad');
                    showFieldState('password', setFieldState);
                    showFieldState('confirmPassword', setFieldState);
                    return;
                }

                await onSubmit(username, verificationCode, formData.password);
                console.log('Successfully sent Password Reset request!');
            } else {
                await onSubmit(username, verificationCode);
                console.log('Successfully sent Verification request!');
            }

            setIsSuccess(true);
            if (isPasswordReset) {
                showFieldState('password', setFieldState, {
                    state: 'success',
                    duration: 2000,
                    persist: true
                });
                showFieldState('confirmPassword', setFieldState, {
                    state: 'success',
                    duration: 2000,
                    persist: true
                });
            }
            showFieldState('code', setFieldState, {
                state: 'success',
                duration: 2000,
                persist: true
            });

            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (error) {
            switch (error.code) {
                case VerificationErrorCode.ALREADY_VERIFIED:
                    console.log(error);
                    showAlert('Account already verified!', 'good');
                    showFieldState('code', setFieldState, {
                        state: 'success',
                        duration: 2000,
                        persist: true
                    });
                    setIsSuccess(true);
                    setTimeout(() => {
                        router.push('/login')
                    }, 2000);
                    break
                case VerificationErrorCode.MISSING_FIELDS:
                    console.error(error);
                    showAlert('Please fill out all fields.', 'bad');
                    error.details.missingFields
                        .filter(fieldId => fieldId !== 'username')
                        .forEach(fieldId => {
                            showFieldState(fieldId, setFieldState);
                        });
                    break
                case VerificationErrorCode.INVALID_CODE:
                    console.error(error);
                    showAlert('Verification Code is Incorrect.', 'bad');
                    showFieldState('code', setFieldState);
                    break
                case VerificationErrorCode.INVALID_INPUT:
                    console.error(error);
                    if (error.details?.field) {
                        const fields = Array.isArray(error.details.field)
                            ? error.details.field
                            : [error.details.field];
                        fields.filter(fieldId => fieldId !== 'username' && fieldId !== 'identifier')
                            .forEach(fieldId => {
                                showFieldState(fieldId, setFieldState);
                            });
                    }
                    showAlert('Invalid input provided.', 'bad');
                    break
                case VerificationErrorCode.USER_NOT_FOUND:
                    console.error(error);
                    showAlert('User not found.', 'bad');
                    showFieldState('code', setFieldState);
                    if (isPasswordReset) {
                        showFieldState('password', setFieldState);
                        showFieldState('confirmPassword', setFieldState);
                    }
                    break
                case VerificationErrorCode.EXPIRED_CODE:
                    setTimer(0);
                    console.error(error);
                    showAlert('Verification code has expired. Please request a new one.', 'bad');
                    showFieldState('code', setFieldState);
                    break
                case VerificationErrorCode.RATE_LIMIT_EXCEEDED:
                    console.error(error);
                    showAlert('Too many attempts. Please try again later.', 'bad');
                    showFieldState('code', setFieldState);
                    if (isPasswordReset) {
                        showFieldState('password', setFieldState);
                        showFieldState('confirmPassword', setFieldState);
                    }
                    break
                case VerificationErrorCode.DATABASE_ERROR:
                    console.error(error);
                    showAlert('Verification failed. Please try again later.', 'bad');
                    showFieldState('code', setFieldState);
                    if (isPasswordReset) {
                        showFieldState('password', setFieldState);
                        showFieldState('confirmPassword', setFieldState);
                    }
                    break
                case VerificationErrorCode.SERVER_ERROR:
                    console.error(error);
                    showAlert('Internal server error. Please try again later.', 'bad');
                    showFieldState('code', setFieldState);
                    if (isPasswordReset) {
                        showFieldState('password', setFieldState);
                        showFieldState('confirmPassword', setFieldState);
                    }
                    break
                default:
                    console.error(error);
                    showAlert('An unknown error has occurred. Please try again later.', 'bad');
                    showFieldState('code', setFieldState);
                    if (isPasswordReset) {
                        showFieldState('password', setFieldState);
                        showFieldState('confirmPassword', setFieldState);
                    }
            }
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = isPasswordReset
        ? !formData.code.includes('') && validation.isPasswordValid && validation.passwordsMatch && !isLoading
        : !formData.code.includes('') && !isLoading;

    return (
        <Form
            title="Verify your Account"
            onSubmit={handleFormSubmission}
            className="verification-form"
        >
            <p id="instruction">Please enter the OTP sent to:</p>
            <p id="user-email">{email}</p>
            <CodeInput
                length={6}
                value={formData.code}
                onChange={handleCodeChange}
                disabled={isLoading}
                inputRefs={inputRefs}
                state={fieldState.code}
                autoComplete='one-time-code'
            />
            <p
                id="resend-code"
                onClick={(!timer && !isResendLoading) ? handleResendCode : undefined}
                className={`resend-link ${(timer > 0 || isResendLoading) ? 'disabled' : ''}`}
            >
                {timer > 0
                    ? `Resend Code in ${timer}s`
                    : isResendLoading
                        ? 'Sending...'
                        : 'Resend Code'
                }
            </p>
            {isPasswordReset && (
                <div id="password-section">
                    <PasswordInput
                        id="password"
                        autoComplete="new-password"
                        value={formData.password}
                        onChange={handlePasswordChange}
                        placeholder="New Password"
                        label="New Password"
                        disabled={isLoading || !isPasswordReset}
                        state={fieldState.password}
                    />
                    <InputRequirements
                        id="password-requirements"
                        requirements={[
                            {id: 'password-length', text: '8 Letters', met: validation.passwordIsValidLength},
                            {id: 'password-numbers', text: '1 Number', met: validation.passwordHasNumber},
                            {id: 'password-special', text: '1 Special Character', met: validation.passwordHasSpecialChar}
                        ]}
                    />
                    <PasswordInput
                        id="confirmPassword"
                        autoComplete="new-password"
                        value={formData.confirmPassword}
                        onChange={handlePasswordChange}
                        placeholder="Confirm New Password"
                        label="Confirm New Password"
                        disabled={isLoading}
                        state={fieldState.confirmPassword}
                    />
                </div>
            )}
            <Button
                type="submit"
                loading={isLoading}
                success={isSuccess}
                successText={isPasswordReset ? 'Confirmed!' : 'Verified!'}
                disabled={!isFormValid}
            >
                {isPasswordReset ? 'Confirm' : 'Verify'}
            </Button>
        </Form>
    );
}