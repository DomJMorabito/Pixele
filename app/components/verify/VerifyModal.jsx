'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useEffect, useState, useRef } from 'react';

// Component Imports:

import AlertIndicator from '@/app/components/alert-indicator/AlertIndicator';
import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import CodeInput from '@/app/components/misc/code-input/CodeInput';

// Utils Imports:

import { showIndicator } from '@/app/utils/ui/show-indicator';
import { sendVerificationRequest } from '@/app/utils/api/verify/send-verification-request';
import { resendVerificationCode } from '@/app/utils/api/verify/resend-verification-code';
import { VerificationErrorCode } from '@/app/utils/errors/verification/VerificationError';

// CSS Imports:

import '@/app/components/verify/VerifyModal.css';

export default function VerifyModal({ email, username }) {
    const router = useRouter();
    const [code, setCode] = useState(new Array(6).fill(''));
    const [timer, setTimer] = useState(30);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isResendLoading, setIsResendLoading] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
    }, [timer]);

    const handleInputStyles = (style, duration = 500) => {
        inputRefs.current.forEach(input => {
            input.classList.remove('error', 'success');
            input.classList.add(style);

            if (duration && style === 'error') {
                setTimeout(() => {
                    input.classList.remove('error');
                }, duration);
            }
        });
    }

    const handleResendCode = async (e) => {
        e.preventDefault();
        if (timer > 0) {
            return;
        }
        const alertIndicator = document.getElementById('alert-indicator');
        setIsResendLoading(true);
        try {
            await resendVerificationCode(username);
            setTimer(30);
            showIndicator('Successfully resent verification code.', 'good', alertIndicator);
        } catch (error) {
            switch (error.code) {
                case VerificationErrorCode.RATE_LIMIT_EXCEEDED:
                    showIndicator(`Too many attempts. Please try again in ${error.details?.retryAfter || '30s'}.`, 'bad', alertIndicator);
                    break
                case VerificationErrorCode.USER_NOT_FOUND:
                    showIndicator('User not found.', 'bad', alertIndicator);
                    break
                case VerificationErrorCode.ALREADY_VERIFIED:
                    showIndicator('Account already verified!', 'good', alertIndicator);
                    setIsSuccess(true);
                    setTimeout(() => {
                        router.push('/login');
                    }, 2000);
                    break
                default:
                    showIndicator('Failed to resend verification code.', 'bad', alertIndicator);
            }
        } finally {
            setIsResendLoading(false);
        }
    }

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const alertIndicator = document.getElementById('alert-indicator');
        const verificationCode = code.join('');
        try {
            await sendVerificationRequest(username, verificationCode);
            handleInputStyles('success');
            setIsSuccess(true);
            setTimeout(() => {
                router.push('/login')
            }, 2000);
        } catch (error) {
            switch (error.code) {
                case VerificationErrorCode.ALREADY_VERIFIED:
                    showIndicator('Account already verified!', 'good', alertIndicator);
                    handleInputStyles('success');
                    setIsSuccess(true);
                    setTimeout(() => {
                        router.push('/login')
                    }, 2000);
                    break
                case VerificationErrorCode.MISSING_FIELDS:
                    showIndicator('Missing required fields.', 'bad', alertIndicator);
                    handleInputStyles('error');
                    break
                case VerificationErrorCode.INVALID_CODE:
                    showIndicator('Verification Code is Incorrect.', 'bad', alertIndicator);
                    handleInputStyles('error');
                    break
                case VerificationErrorCode.USER_NOT_FOUND:
                    showIndicator('User not found.', 'bad', alertIndicator);
                    handleInputStyles('error');
                    break
                case VerificationErrorCode.EXPIRED_CODE:
                    setTimer(0);
                    showIndicator('Verification code has expired. Please request a new one.', 'bad', alertIndicator);
                    handleInputStyles('error');
                    break
                case VerificationErrorCode.RATE_LIMIT_EXCEEDED:
                    showIndicator('Too many attempts. Please try again later.', 'bad', alertIndicator);
                    handleInputStyles('error');
                    break
                case VerificationErrorCode.SERVER_ERROR:
                    showIndicator('Internal server error. Please try again later.', 'bad', alertIndicator);
                    handleInputStyles('error');
                    break
                default:
                    console.error('Error verifying:', error);
                    showIndicator('An unknown error has occurred, please try again later.', 'bad', alertIndicator);
                    handleInputStyles('error');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const isAnyInputNull = code.includes('');

    return (
        <>
            <AlertIndicator />
            <Form
                title="Verify Your Account"
                onSubmit={handleFormSubmission}
                className="verification-form"
            >
                <p id="instruction">Please enter the 6-digit code sent to:</p>
                <p id="user-email">{email}</p>
                <CodeInput
                    length={6}
                    value={code}
                    onChange={setCode}
                    disabled={isLoading}
                    inputRefs={inputRefs}
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
                <Button
                    type="submit"
                    loading={isLoading}
                    success={isSuccess}
                    successText="Verified!"
                    disabled={isAnyInputNull}
                >
                    Verify
                </Button>
            </Form>
        </>
    )
}