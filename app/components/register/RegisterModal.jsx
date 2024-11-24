'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useEffect, useState } from 'react';

// Node.js Imports:

import { Filter } from 'bad-words';

// Component Imports:

import AlertIndicator from '../../components/alert-indicator/AlertIndicator';

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

// Component Imports:

import Button from '@/app/components/misc/button/Button';

// CSS Imports:

import './RegisterModal.css';

export default function RegisterModal() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const form = document.getElementById('registration-form');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const lengthRequirement = document.getElementById('length');
        const numberRequirement = document.getElementById('numbers');
        const specialRequirement = document.getElementById('special');
        const submitButton = document.getElementById('submit');
        const emailInput = document.getElementById('email');
        const usernameInput = document.getElementById('username');
        const alertIndicator = document.getElementById('alert-indicator');

        const handlePasswordInputs = () => {
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();
            const requirementsMet = validatePassword(password, lengthRequirement, numberRequirement, specialRequirement);
            validatePasswordsMatch(password, confirmPassword, submitButton, requirementsMet)
        };

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

                if (!validateEmail(email)) { // Check to see if a valid email address was entered.
                    showIndicator('Enter a valid email.', 'bad', alertIndicator);
                    showFieldState(emailInput);
                    return;
                }

                if (!validateUsernameLength(username)) { // Check to see if the entered username is between 5-18 characters long.
                    showIndicator('Username must be 5-18 characters.', 'bad', alertIndicator);
                    showFieldState(usernameInput);
                    return;
                }

                if (!validateUsernameSpecialCharacters(username)) { // Check to see if the entered username contains any special characters (!, @, ?, etc.)
                    showIndicator('Username cannot contain any special characters.', 'bad', alertIndicator);
                    showFieldState(usernameInput);
                    return;
                }

                if (filter.isProfane(username)) { // Check to see if the entered username contains any profane words.
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

        passwordInput.addEventListener('input', handlePasswordInputs);
        confirmPasswordInput.addEventListener('input', handlePasswordInputs);
        document.querySelectorAll('.toggle-visibility').forEach(toggle => {
            toggle.addEventListener('click', togglePassword);
        });
        form.addEventListener('submit', handleFormSubmission);

        return () => {
            passwordInput.removeEventListener('input', handlePasswordInputs);
            confirmPasswordInput.removeEventListener('input', handlePasswordInputs);
            document.querySelectorAll('.toggle-visibility').forEach(toggle => {
                toggle.removeEventListener('click', togglePassword);
            });
            form.removeEventListener('submit', handleFormSubmission);
        }
    }, [router]);

    return (
        <>
            <AlertIndicator />
            <div id = 'register-container'>
                <div id = 'register-box'>
                    <p id = 'welcome'>Join the Fight!</p>
                    <form id='registration-form'>
                        <p id='email-text'>Email</p>
                        <input type='text' id='email' name='email' placeholder='Email'/>
                        <p id='username-text'>Username</p>
                        <input type='text' id='username' name='username' placeholder='Username'/>
                        <p id='password-text'>Password</p>
                        <div className='password-container'>
                            <input type='password' id='password' name='password' placeholder='Password'/>
                            <span className = 'toggle-visibility'>
                                <span className = 'material-symbols-outlined'>visibility</span>
                            </span>
                        </div>
                        <p id='requirements'>
                            <span id='length'> 8 Letters, </span>
                            <span id='numbers'>1 Number, </span>
                            <span id='special'>& 1 Special Character</span>
                        </p>
                        <p id='confirm-password-text'>Confirm Password</p>
                        <div className='password-container'>
                            <input type='password' id='confirm-password' placeholder='Confirm Password'/>
                            <span className='toggle-visibility'>
                                <span className='material-symbols-outlined'>visibility</span>
                            </span>
                        </div>
                        <Button
                            type='submit'
                            id='submit'
                            loading={isLoading}
                            success={isSuccess}
                            disabled
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}