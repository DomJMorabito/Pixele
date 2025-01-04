'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useEffect, useState } from 'react';

// Node.js Imports:

import { Filter } from 'bad-words';

// Component Imports:

import Button from '@/app/components/misc/button/Button';
import Form from '@/app/components/misc/form/Form';
import Input from '@/app/components/misc/input/Input';
import PasswordInput from '@/app/components/misc/password-input/PasswordInput';
import InputRequirements from "@/app/components/misc/input-requirements/InputRequirements";

// Utils Imports:

import { showIndicator } from '@/app/utils/ui/show-indicator';
import { validateEmail } from '@/app/utils/input/validate-email';
import { validateUsernameLength } from '@/app/utils/input/validate-username-length';
import { validateUsernameSpecialCharacters } from '@/app/utils/input/validate-username-special-characters'
import { validatePasswordsMatch } from '@/app/utils/input/validate-passwords-match'
import { setupPasswordValidation } from "@/app/utils/input/set-up-password-validation";
import { sendRegisterRequest } from '@/app/utils/api/register/send-register-request';
import { showFieldState } from '@/app/utils/ui/show-field-state';
import { RegistrationErrorCode } from '@/app/utils/errors/register/RegistrationError';
import { checkUsernameAvailability } from '@/app/utils/api/register/check-username-availability';
import { validateUsername } from '@/app/utils/input/validate-username';

// CSS Imports:

import '@/app/components/register/RegisterModal.css'

export default function RegisterModal() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isCheckingUsername, setIsCheckingUsername] = useState(false);
    const [isUsernameTaken, setIsUsernameTaken] = useState(false);
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [hasSpecialChars, setHasSpecialChars] = useState(false);
    const [isValidLength, setIsValidLength] = useState(false);

    useEffect(() => {
        let timeoutId;
        const usernameInput = document.getElementById('username');
        const usernameLengthRequirement = document.getElementById('username-length');
        const usernameSpecialRequirement = document.getElementById('username-special');

        const handleUsernameInput = async (event) => {
            const username = event.target.value.trim();
            setIsValidLength(validateUsernameLength(username));
            setHasSpecialChars(!validateUsernameSpecialCharacters(username));
            const usernameIsValid = validateUsername(
                username,
                usernameLengthRequirement,
                usernameSpecialRequirement
            );
            setIsUsernameValid(usernameIsValid);
            clearTimeout(timeoutId);
            if (!username) {
                setIsUsernameTaken(false);
                setIsCheckingUsername(false);
                return;
            }

            if (usernameIsValid) {
                setIsCheckingUsername(true);
                timeoutId = setTimeout(async () => {
                    try {
                        const isAvailable = await checkUsernameAvailability(username);
                        setIsUsernameTaken(!isAvailable);
                    } catch (error) {
                        console.error('Error checking username availability:', error);
                    } finally {
                        setIsCheckingUsername(false);
                    }
                }, 500);
            } else {
                setIsUsernameTaken(false);
                setIsCheckingUsername(false);
            }
        };

        usernameInput.addEventListener('input', handleUsernameInput);

        return () => {
            usernameInput.removeEventListener('input', handleUsernameInput);
            clearTimeout(timeoutId);
        }
    }, [])

    useEffect(() => {
        return setupPasswordValidation(setIsFormValid);
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
                console.error('Passwords do not match.');
                showIndicator('Passwords do not match.', 'bad', alertIndicator);
                showFieldState(passwordInput);
                showFieldState(confirmPasswordInput);
                return;
            }

            if (!validateEmail(email)) {
                console.error('Input is not a valid email address.');
                showIndicator('Enter a valid email.', 'bad', alertIndicator);
                showFieldState(emailInput);
                return;
            }

            if (!validateUsernameLength(username)) {
                console.error('Username must be 5-18 characters.');
                showIndicator('Username must be 5-18 characters.', 'bad', alertIndicator);
                showFieldState(usernameInput);
                return;
            }

            if (!validateUsernameSpecialCharacters(username)) {
                console.error('Username cannot contain any special characters.');
                showIndicator('Username cannot contain any special characters.', 'bad', alertIndicator);
                showFieldState(usernameInput);
                return;
            }

            if (filter.isProfane(username)) {
                console.error('Really. (Username contains profanity)');
                showIndicator('Really.', 'bad', alertIndicator);
                showFieldState(usernameInput);
                return;
            }
            await sendRegisterRequest(username, email, password);
            setIsSuccess(true);
            console.log('Successfully sent Registration request!');
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
                    console.error(error);
                    showIndicator('Please fill out all fields.', 'bad', alertIndicator);
                    error.details.missingFields.forEach(field => {
                        const input = document.getElementById(field);
                        if (input) {
                            showFieldState(input);
                        }
                    });
                    break
                case RegistrationErrorCode.DUPLICATE_CREDENTIALS:
                    console.error(error);
                    showIndicator('Both Email and Username are already in use.', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    showFieldState(usernameInput);
                    break
                case RegistrationErrorCode.EMAIL_EXISTS:
                    console.error(error);
                    showIndicator('Email already in use', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    break
                case RegistrationErrorCode.USERNAME_EXISTS:
                    console.error(error);
                    showIndicator('Username already taken', 'bad', alertIndicator);
                    showFieldState(usernameInput);
                    break
                case RegistrationErrorCode.INVALID_EMAIL:
                    console.error(error);
                    showIndicator('Enter a valid email.', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    break
                case RegistrationErrorCode.INVALID_USERNAME:
                    showFieldState(usernameInput);
                    if (error.details?.requirements?.minLength) {
                        console.error(error);
                        showIndicator('Username must be 5-18 characters.', 'bad', alertIndicator);
                    } else if (error.details?.requirements?.allowedCharacters) {
                        console.error(error);
                        showIndicator('Username cannot contain any special characters.', 'bad', alertIndicator);
                    }
                    break
                case RegistrationErrorCode.INAPPROPRIATE_CONTENT:
                    console.error(error);
                    showIndicator('Seriously?', 'bad', alertIndicator);
                    showFieldState(usernameInput);
                    break
                case RegistrationErrorCode.INVALID_PASSWORD:
                    console.error(error);
                    showIndicator('Password does not meet the requirements.', 'bad', alertIndicator);
                    showFieldState(passwordInput);
                    showFieldState(confirmPasswordInput);
                    break
                case RegistrationErrorCode.RATE_LIMIT_EXCEEDED:
                    console.error(error);
                    showIndicator('Too many attempts. Please try again later.', 'bad', alertIndicator);
                    [emailInput, usernameInput, passwordInput, confirmPasswordInput].forEach(input => {
                        showFieldState(input);
                    });
                    break
                case RegistrationErrorCode.SERVER_ERROR:
                    console.error(error);
                    showIndicator('Internal server error. Please try again later.', 'bad', alertIndicator);
                    [emailInput, usernameInput, passwordInput, confirmPasswordInput].forEach(input => {
                        showFieldState(input);
                    });
                    break
                default:
                    console.error(error);
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
                    label={<>Username{isValidLength && !hasSpecialChars && (
                        <span className={`username-status ${isUsernameTaken ? 'taken' : isCheckingUsername ? '' : 'available'}`}>
                            {isUsernameTaken ? ' (taken)' : isCheckingUsername ? '' : ' (available)'}
                        </span>
                    )}</>}
                    disabled={isLoading}
                />
                <InputRequirements
                    id="username-requirements"
                    requirements={[
                        { id: 'username-length', text: '5-18 Letters' },
                        { id: 'username-special', text: 'No Special Characters' }
                    ]}
                />
                <PasswordInput
                    id="password"
                    placeholder="Password"
                    label = 'Password'
                    disabled={isLoading}
                />
                <InputRequirements
                    id="password-requirements"
                    requirements={[
                        { id: 'password-length', text: '8 Letters' },
                        { id: 'password-numbers', text: '1 Number' },
                        { id: 'password-special', text: '1 Special Character' }
                    ]}
                />
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
                    disabled={!isFormValid || isLoading || isUsernameTaken || !isUsernameValid}
                >
                    Submit
                </Button>
                <p id="login-redirect">
                    Already have an account? <span onClick={() => router.push('/login')} id="login-link">Log in!</span>
                </p>
            </Form>
        </>
    );
}