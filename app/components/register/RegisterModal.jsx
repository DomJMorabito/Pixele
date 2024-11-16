'use client';

// Next.js Imports:

import { useRouter } from 'next/navigation';

// React Imports:

import { useEffect } from 'react';

// Node.js Imports:

import { Filter } from 'bad-words';

// Component Imports:

import AlertIndicator from '../../components/alert-indicator/AlertIndicator';

// Utils Imports:

import { showIndicator } from '@/app/utils/show-indicator';
import { validateEmail } from '@/app/utils/validate-email';
import { validateUsernameLength } from '@/app/utils/validate-username-length';
import { validateUsernameSpecialCharacters } from '@/app/utils/validate-username-special-characters'
import { validatePassword } from '@/app/utils/validate-password';
import { validatePasswordsMatch } from '@/app/utils/validate-passwords-match'
import { sendRegisterRequest } from '@/app/utils/send-register-request';
import { showFieldError } from '@/app/utils/showFieldError';
import { RegistrationErrorCode } from '@/app/utils/errors/RegistrationError';

// CSS Imports:

import './RegisterModal.css';

export default function RegisterModal() {
    const router = useRouter();

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
            const email = emailInput.value.trim();
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();
            const filter = new Filter();

            if (!validatePasswordsMatch(password, confirmPassword, submitButton, true)) {
                showIndicator('Passwords do not match.', 'bad', alertIndicator);
                showFieldError(passwordInput);
                showFieldError(confirmPasswordInput);
                return;
            }

            if (!validateEmail(email)) { // Check to see if a valid email address was entered.
                showIndicator('Enter a valid email.', 'bad', alertIndicator);
                showFieldError(emailInput);
                return;
            }

            if (!validateUsernameLength(username)) { // Check to see if the entered username is between 5-18 characters long.
                showIndicator('Username must be 5-18 characters.', 'bad', alertIndicator);
                showFieldError(usernameInput);
                return;
            }

            if (!validateUsernameSpecialCharacters(username)) { // Check to see if the entered username contains any special characters (!, @, ?, etc.)
                showIndicator('Username cannot contain any special characters.', 'bad', alertIndicator);
                showFieldError(usernameInput);
                return;
            }

            if (filter.isProfane(username)) { // Check to see if the entered username contains any profane words.
                showIndicator('Really.', 'bad', alertIndicator);
                showFieldError(usernameInput);
                return;
            }

            try {
                const data = await sendRegisterRequest(username, email, password);
                showIndicator('Check your email for verification!', 'good', alertIndicator);
                router.push(`/verify?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`);
            } catch (error) {
                switch (error.code) {
                    case RegistrationErrorCode.MISSING_FIELDS:
                        showIndicator('Please fill out all fields.', 'bad', alertIndicator);
                        error.details.missingFields.forEach(field => {
                            const input = document.getElementById(field);
                            if (input) {
                                showFieldError(input);
                            }
                        });
                        break;
                    case RegistrationErrorCode.DUPLICATE_CREDENTIALS:
                        showIndicator('Both Email and Username are already in use.', 'bad', alertIndicator);
                        showFieldError(emailInput);
                        showFieldError(usernameInput);
                        break;
                    case RegistrationErrorCode.EMAIL_EXISTS:
                        showIndicator('Email already in use', 'bad', alertIndicator);
                        showFieldError(emailInput);
                        break;
                    case RegistrationErrorCode.USERNAME_EXISTS:
                        showIndicator('Username already taken', 'bad', alertIndicator);
                        showFieldError(usernameInput);
                        break;
                    case RegistrationErrorCode.INVALID_EMAIL:
                        showIndicator('Enter a valid email.', 'bad', alertIndicator);
                        showFieldError(emailInput);
                        break;
                    case RegistrationErrorCode.INVALID_USERNAME:
                        showFieldError(usernameInput);
                        if (error.details?.requirements?.minLength) {
                            showIndicator('Username must be 5-18 characters.', 'bad', alertIndicator);
                        } else if (error.details?.requirements?.allowedCharacters) {
                            showIndicator('Username cannot contain any special characters.', 'bad', alertIndicator);
                        } else {
                            showIndicator('Invalid username format.', 'bad', alertIndicator);
                        }
                        break;
                    case RegistrationErrorCode.INAPPROPRIATE_CONTENT:
                        showIndicator('Seriously?', 'bad', alertIndicator);
                        showFieldError(usernameInput);
                        break;
                    default:
                        console.error('Error signing up:', error);
                        showIndicator('An unknown error has occurred, please try again later.', 'bad', alertIndicator);
                        [emailInput, usernameInput, passwordInput].forEach(input => {
                            showFieldError(input);
                        });
                }
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
                        <button type='submit' id='submit' disabled>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}