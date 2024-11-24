'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useEffect, useState, useRef } from 'react';

// Component Imports:

import AlertIndicator from '@/app/components/alert-indicator/AlertIndicator';

// Utils Imports:

import { showIndicator } from '@/app/utils/ui/show-indicator';
import { sendVerificationRequest } from '@/app/utils/api/verify/send-verification-request';
import { resendVerificationCode } from '@/app/utils/api/verify/resend-verification-code';
import { VerificationErrorCode } from '@/app/utils/errors/verification/VerificationError';

// Component Imports:

import Button from '@/app/components/misc/button/Button';

// CSS Imports:

import './VerifyModal.css';

export default function VerifyModal({ email, username }) {
    const router = useRouter();
    const [code, setCode] = useState(new Array(6).fill(''));
    const [timer, setTimer] = useState(30);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
    }, [timer]);

    const handleChange = (e, index) => {
        const { value } = e.target;

        if (/^\d$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (index < 5 && value) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (code[index]) {
                const newCode = [...code];
                newCode[index] = '';
                setCode(newCode);
            } else if (index > 0) {
                inputRefs.current[index - 1].focus();
                const newCode = [...code];
                newCode[index - 1] = '';
                setCode(newCode);
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData('text').slice(0, 6).split('');
        if (pasteData.every(char => /^\d$/.test(char))) {
            setCode(pasteData);
            pasteData.forEach((num, i) => inputRefs.current[i].value = num);
            inputRefs.current[5].focus();
        }
    };

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
                        router.push('/login')
                    }, 2000);
                    break
                default:
                    showIndicator('Failed to resend verification code.', 'bad', alertIndicator);
            }
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
            <div id = 'verify-container'>
                <div id = 'verify-box'>
                    <p id = 'verify-text'>Verify Your Account</p>
                    <p id = 'instruction'>Please enter the 6-digit code sent to:</p>
                    <p id = 'user-email'><strong>{email}</strong></p>
                    <form id = 'verification-form' onSubmit = { handleFormSubmission }>
                        <div id = 'code-inputs' onPaste = { handlePaste }>
                            {code.map((digit, index) => (
                                <input
                                    key = {index}
                                    type = 'text'
                                    maxLength = '1'
                                    value = {digit}
                                    ref= {(element) => {
                                        inputRefs.current[index] = element;
                                    }}
                                    onChange = {(e) => handleChange(e, index)}
                                    onKeyDown = {(e) => handleKeyDown(e, index)}
                                    className = 'code-input'
                                />
                            ))}
                        </div>
                        <p
                            id = 'resend-code'
                            onClick = {handleResendCode}
                            className = {`resend-link ${timer > 0 ? 'disabled' : ''}`}
                        >
                            {timer > 0 ? `Resend Code in ${timer}s` : 'Resend Code'}
                        </p>
                        <Button
                            type="submit"
                            id='verify'
                            loading={isLoading}
                            success={isSuccess}
                            successText="Verified!"
                            disabled={isAnyInputNull}
                        >
                            Verify
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}