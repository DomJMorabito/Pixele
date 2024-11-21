'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useEffect, useState } from 'react';

// Component Imports:

import AlertIndicator from '../../components/alert-indicator/AlertIndicator';

// Utils Imports:

import { showIndicator } from '@/app/utils/ui/show-indicator';
import { validateInputs } from '@/app/utils/input/validate-inputs';
import { sendLoginRequest } from '@/app/utils/api/login/send-login-request';
import { showFieldState } from "@/app/utils/ui/show-field-state";
import { LoginErrorCode } from '@/app/utils/errors/login/LoginError';

// Component Imports:

import Button from '@/app/components/misc/button/Button';

// CSS Imports:

import './LoginModal.css';

export default function LoginModal() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const form = document.getElementById('login-form');
        const usernameEmailInput = document.getElementById('username-email');
        const passwordInput = document.getElementById('password');
        const confirmButton = document.getElementById('submit');
        const alertIndicator = document.getElementById('alert-indicator');
        const toggle = document.querySelector('.toggle-visibility');

        const togglePassword = (e) => {
            e.preventDefault();
            const input = e.currentTarget.previousElementSibling;
            const icon = e.currentTarget.querySelector('.material-symbols-outlined');
            input.type = input.type === 'password' ? 'text' : 'password';
            icon.textContent = input.type === 'password' ? 'visibility' : 'visibility_off';
        }

        const handleFormSubmission = async (event) => {
            event.preventDefault();
            setIsLoading(true);
            const identifier = usernameEmailInput.value.trim();
            const password = passwordInput.value.trim();

            try {
                const data = await sendLoginRequest(identifier, password);
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
                    router.push('/')
                }, 2000);
            } catch (error) {
                switch (error.code) {
                    case LoginErrorCode.MISSING_FIELDS:
                        error.details.missingFields.forEach(field => {
                            const input = document.getElementById(field);
                            if (input) {
                                showFieldState(input);
                            }
                        });
                        break
                    case LoginErrorCode.AUTHENTICATION_INCOMPLETE:
                        if (error.details?.nextStep?.signInStep === 'CONFIRM_SIGN_UP') {
                            showIndicator('Please Complete Verification.', 'bad', alertIndicator);
                            //redirect to verify page
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
                    case LoginErrorCode.USER_NOT_CONFIRMED:
                        showIndicator('Please Complete Verification.', 'bad', alertIndicator);
                        // redirect to verify page
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

        usernameEmailInput.addEventListener('input', () => validateInputs(usernameEmailInput, passwordInput, confirmButton));
        passwordInput.addEventListener('input', () => validateInputs(usernameEmailInput, passwordInput, confirmButton));
        toggle.addEventListener('click', togglePassword);
        form.addEventListener('submit', handleFormSubmission);

        return () => {
            usernameEmailInput.removeEventListener('input', validateInputs);
            passwordInput.removeEventListener('input', validateInputs);
            toggle.removeEventListener('click', togglePassword);
            form.removeEventListener('submit', handleFormSubmission);
        }
    }, [router]);

    return (
        <>
            <AlertIndicator />
            <div id = 'login-container'>
                <div id = 'login-box'>
                    <p id = 'welcome-back'>Get Back In There!</p>
                    <form id = 'login-form'>
                        <p id = 'username-email-text'>Username/Email</p>
                        <input type = 'text' id = 'username-email' name = 'username-email' placeholder = 'Username or Email'/>
                        <p id = 'password-text'>Password</p>
                        <div className='password-container'>
                            <input type='password' id='password' name='password' placeholder='Password'/>
                            <span className='toggle-visibility'>
                                <span className='material-symbols-outlined'>visibility</span>
                            </span>
                        </div>
                        <Button
                            type='submit'
                            id='submit'
                            loading={isLoading}
                            success={isSuccess}
                            successText="Welcome!"
                            disabled
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}