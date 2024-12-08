'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useEffect, useState } from 'react';

// Node.js Imports:

import { Filter } from 'bad-words';

// Component Imports:

import AlertIndicator from '@/app/components/alert-indicator/AlertIndicator';
import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import Input from '@/app/components/misc/input/Input';
import PasswordInput from '@/app/components/misc/password-input/PasswordInput';

// Utils Imports:

import { showIndicator } from '@/app/utils/ui/show-indicator';
import { validateEmail } from '@/app/utils/input/validate-email';
import { validateUsernameLength } from '@/app/utils/input/validate-username-length';
import { validateUsernameSpecialCharacters } from '@/app/utils/input/validate-username-special-characters'
import { validatePassword } from '@/app/utils/input/validate-password';
import { validatePasswordsMatch } from '@/app/utils/input/validate-passwords-match'
import { sendRegisterRequest } from '@/app/utils/api/register/send-register-request';
import { showFieldState } from '@/app/utils/ui/show-field-state';
import { RegistrationErrorCode } from '@/app/utils/errors/register/RegistrationError';

// CSS Imports:

import '@/app/components/register/RegisterModal.css'

export default function RegisterModal() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const lengthRequirement = document.getElementById('length');
        const numberRequirement = document.getElementById('numbers');
        const specialRequirement = document.getElementById('special');

        const handlePasswordInputs = () => {
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();
            const requirementsMet = validatePassword(password, lengthRequirement, numberRequirement, specialRequirement);
            const submitButton = document.querySelector('button[type="submit"]');
            setIsFormValid(validatePasswordsMatch(password, confirmPassword, submitButton, requirementsMet))
        };

        passwordInput.addEventListener('input', handlePasswordInputs);
        confirmPasswordInput.addEventListener('input', handlePasswordInputs);

        return () => {
            passwordInput.removeEventListener('input', handlePasswordInputs);
            confirmPasswordInput.removeEventListener('input', handlePasswordInputs);
        }
    }, [router]);

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const emailInput = document.getElementById('email');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const alertIndicator = document.getElementById('alert-indicator');
        const submitButton = document.querySelector('button[type="submit"]');
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const filter = new Filter();

        try {
            if (!validatePasswordsMatch(password, confirmPassword, submitButton, true)) {
                showIndicator('Passwords do not match.', 'bad', alertIndicator);
                showFieldState(passwordInput);
                showFieldState(confirmPasswordInput);
                return;
            }

            if (!validateEmail(email)) {
                showIndicator('Enter a valid email.', 'bad', alertIndicator);
                showFieldState(emailInput);
                return;
            }

            if (!validateUsernameLength(username)) {
                showIndicator('Username must be 5-18 characters.', 'bad', alertIndicator);
                showFieldState(usernameInput);
                return;
            }

            if (!validateUsernameSpecialCharacters(username)) {
                showIndicator('Username cannot contain any special characters.', 'bad', alertIndicator);
                showFieldState(usernameInput);
                return;
            }

            if (filter.isProfane(username)) {
                showIndicator('Really.', 'bad', alertIndicator);
                showFieldState(usernameInput);
                return;
            }
            await sendRegisterRequest(username, email, password);
            setIsSuccess(true);
            const inputs = [emailInput, usernameInput, passwordInput, confirmPasswordInput];
            inputs.forEach(input => {
                showFieldState(input, {
                    duration: 2000,
                    state: 'success',
                    persist: true
                });
            });
            setTimeout(() => {
                router.push(`/verify?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`);
            }, 2000);
        } catch (error) {
            switch (error.code) {
                case RegistrationErrorCode.MISSING_FIELDS:
                    showIndicator('Please fill out all fields.', 'bad', alertIndicator);
                    error.details.missingFields.forEach(field => {
                        const input = document.getElementById(field);
                        if (input) {
                            showFieldState(input);
                        }
                    });
                    break
                case RegistrationErrorCode.DUPLICATE_CREDENTIALS:
                    showIndicator('Both Email and Username are already in use.', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    showFieldState(usernameInput);
                    break
                case RegistrationErrorCode.EMAIL_EXISTS:
                    showIndicator('Email already in use', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    break
                case RegistrationErrorCode.USERNAME_EXISTS:
                    showIndicator('Username already taken', 'bad', alertIndicator);
                    showFieldState(usernameInput);
                    break
                case RegistrationErrorCode.INVALID_EMAIL:
                    showIndicator('Enter a valid email.', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    break
                case RegistrationErrorCode.INVALID_USERNAME:
                    showFieldState(usernameInput);
                    if (error.details?.requirements?.minLength) {
                        showIndicator('Username must be 5-18 characters.', 'bad', alertIndicator);
                    } else if (error.details?.requirements?.allowedCharacters) {
                        showIndicator('Username cannot contain any special characters.', 'bad', alertIndicator);
                    }
                    break
                case RegistrationErrorCode.INAPPROPRIATE_CONTENT:
                    showIndicator('Seriously?', 'bad', alertIndicator);
                    showFieldState(usernameInput);
                    break
                case RegistrationErrorCode.INVALID_PASSWORD:
                    showIndicator('Password does not meet the requirements.', 'bad', alertIndicator);
                    showFieldState(passwordInput);
                    showFieldState(confirmPasswordInput);
                    break
                case RegistrationErrorCode.RATE_LIMIT_EXCEEDED:
                    showIndicator('Too many attempts. Please try again later.', 'bad', alertIndicator);
                    [emailInput, usernameInput, passwordInput, confirmPasswordInput].forEach(input => {
                        showFieldState(input);
                    });
                    break
                case RegistrationErrorCode.SERVER_ERROR:
                    showIndicator('Internal server error. Please try again later.', 'bad', alertIndicator);
                    [emailInput, usernameInput, passwordInput, confirmPasswordInput].forEach(input => {
                        showFieldState(input);
                    });
                    break
                default:
                    console.error('Error signing up:', error);
                    showIndicator('An unknown error has occurred, please try again later.', 'bad', alertIndicator);
                    [emailInput, usernameInput, passwordInput, confirmPasswordInput].forEach(input => {
                        showFieldState(input);
                    });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AlertIndicator />
            <Form
                title="Join the Fight!"
                onSubmit={handleFormSubmission}
                className="registration-form"
            >
                <Input
                    id="email"
                    placeholder="Email"
                    label = 'Email'
                    disabled={isLoading}
                />
                <Input
                    id="username"
                    placeholder="Username"
                    label = 'Username'
                    disabled={isLoading}
                />
                <PasswordInput
                    id="password"
                    placeholder="Password"
                    label = 'Password'
                    disabled={isLoading}
                />
                <p id="requirements">
                    <span id="length"> 8 Letters, </span>
                    <span id="numbers">1 Number, </span>
                    <span id="special">& 1 Special Character</span>
                </p>
                <PasswordInput
                    id="confirm-password"
                    placeholder="Confirm Password"
                    label = 'Confirm Password'
                    disabled={isLoading}
                />
                <Button
                    type="submit"
                    loading={isLoading}
                    success={isSuccess}
                    disabled={!isFormValid || isLoading}
                >
                    Submit
                </Button>
            </Form>
        </>
    );
}