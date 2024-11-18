'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import AlertIndicator from '../../components/alert-indicator/AlertIndicator';

// Utils Imports:

import { showIndicator } from '@/app/utils/show-indicator';
import { validateInputs } from '@/app/utils/validate-inputs';
import { sendLoginRequest } from '@/app/utils/send-login-request';

// CSS Imports:

import './LoginModal.css';

export default function LoginModal() {

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
            const identifier = usernameEmailInput.value.trim();
            const password = passwordInput.value.trim();

            try {
                const data = await sendLoginRequest(identifier, password);
                showIndicator('Login Successful!', 'good', alertIndicator);
                form.reset();
                confirmButton.disabled = true;
            } catch (error) {
                if (error.message === 'User not found...') {
                    showIndicator('No User Associated with this Email/Username', 'bad', alertIndicator);
                    usernameEmailInput.classList.add('error');
                    setTimeout(() => {
                        usernameEmailInput.classList.remove('error');
                    }, 300);
                } else if (error.message === 'Incorrect Password...') {
                    showIndicator('Password is Incorrect', 'bad', alertIndicator);
                    passwordInput.classList.add('error');
                    setTimeout(() => {
                        passwordInput.classList.remove('error');
                    }, 300);
                } else {
                    showIndicator('An unknown error has occurred, please try again later.', 'bad', alertIndicator);
                }
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
    }, []);

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
                        <button type='submit' id='submit' disabled>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}