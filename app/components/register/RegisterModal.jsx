"use client";

// React Imports:

import {useEffect} from "react";

// Node.js Imports:

import { Filter } from 'bad-words';

// Component Imports:

import AlertIndicator from "../../components/alert-indicator/AlertIndicator";

// Utils Imports:

import { showIndicator } from "@/app/utils/show-indicator";
import { validateEmail } from "@/app/utils/validate-email";
import { validateUsernameLength } from "@/app/utils/validate-username-length";
import { validateUsernameSpecialCharacters } from "@/app/utils/validate-username-special-characters"
import { validatePassword } from "@/app/utils/validate-password";
import { sendRegisterRequest } from "@/app/utils/send-register-request";
import { sendVerificationEmail } from "@/app/utils/send-verification-email";
import { generateVerificationToken } from "@/app/utils/generate-verification-token";

// CSS Imports:

import "./RegisterModal.css";

export default function RegisterModal() {

    useEffect(() => {
        const form = document.getElementById("registration-form");
        const passwordInput = document.getElementById("password");
        const lengthRequirement = document.getElementById("length");
        const numberRequirement = document.getElementById("numbers");
        const specialRequirement = document.getElementById("special");
        const submitButton = document.getElementById("submit");
        const emailInput = document.getElementById('email');
        const usernameInput = document.getElementById('username');
        const alertIndicator = document.getElementById('alert-indicator');

        const handlePasswordInput = () => {
            const password = passwordInput.value.trim();
            validatePassword(password, lengthRequirement, numberRequirement, specialRequirement, submitButton);
        };

        const handleFormSubmission = async (event) => {
            event.preventDefault();
            const email = emailInput.value.trim();
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            const filter = new Filter();

            if (!validateEmail(email)) { // Check to see if a valid email address was entered.
                showIndicator('Enter a valid email.', 'bad', alertIndicator);
                emailInput.classList.add('error');
                setTimeout(() => {
                    emailInput.classList.remove('error');
                }, 500);
                return;
            }

            if (!validateUsernameLength(username)) { // Check to see if the entered username is between 5-18 characters long.
                showIndicator('Username must be 5-18 characters.', 'bad', alertIndicator);
                usernameInput.classList.add('error');
                setTimeout(() => {
                    usernameInput.classList.remove('error');
                }, 500);
                return;
            }

            if (!validateUsernameSpecialCharacters(username)) { // Check to see if the entered username contains any special characters (!, @, ?, etc.)
                showIndicator('Username cannot contain any special characters.', 'bad', alertIndicator);
                usernameInput.classList.add('error');
                setTimeout(() => {
                    usernameInput.classList.remove('error');
                }, 500);
                return;
            }

            if (filter.isProfane(username)) { // Check to see if the entered username contains any profane words.
                showIndicator('Really.', 'bad', alertIndicator);
                usernameInput.classList.add('error');
                setTimeout(() => {
                    usernameInput.classList.remove('error');
                }, 500);
                submitButton.disabled = false;
                return;
            }

            try {
                const token = generateVerificationToken();
                await sendVerificationEmail(email, username, token);
                showIndicator('Check your email for verification!', 'good', alertIndicator);
                const data = await sendRegisterRequest(username, email, password);
                //form.reset();
                //submitButton.disabled = true;
                //lengthRequirement.classList.remove('requirement-met', 'requirement-not-met');
                //numberRequirement.classList.remove('requirement-met', 'requirement-not-met');
                //specialRequirement.classList.remove('requirement-met', 'requirement-not-met');
            } catch (error) {
                if (error.message === 'Both Email and Username are already in use') { // Check to see if both email and username are already present in database (crazy edge case...).
                    showIndicator('Both Email and Username are already in use.', 'bad', alertIndicator);
                    emailInput.classList.add('error');
                    usernameInput.classList.add('error');
                    setTimeout(() => {
                        emailInput.classList.remove('error');
                        usernameInput.classList.remove('error');
                    }, 500);
                } else if (error.message === 'Email already in use.') { // Check to see if email is already present in database.
                    showIndicator('Email already in use', 'bad', alertIndicator);
                    emailInput.classList.add('error');
                    setTimeout(() => {
                        emailInput.classList.remove('error');
                    }, 500);
                } else if (error.message === 'Username already in use.') { // Check to see if username is already present in database.
                    showIndicator('Username already taken', 'bad', alertIndicator);
                    usernameInput.classList.add('error');
                    setTimeout(() => {
                        usernameInput.classList.remove('error');
                    }, 500);
                } else if (error.message === 'Enter a valid email.') { // Check to see if a valid email address was entered.
                    showIndicator('Enter a valid email.', 'bad', alertIndicator);
                    emailInput.classList.add('error');
                    setTimeout(() => {
                        emailInput.classList.remove('error');
                    }, 500);
                } else if (error.message === 'Username must be 5-18 characters.') { // Check to see if the entered username is between 5-18 characters long.
                    showIndicator('Username must be 5-18 characters.', 'bad', alertIndicator);
                    usernameInput.classList.add('error');
                    setTimeout(() => {
                        usernameInput.classList.remove('error');
                    }, 500);
                } else if (error.message === 'Username cannot contain any special characters.') { // Check to see if the entered username contains any special characters (!, @, ?, etc.)
                    showIndicator('Username cannot contain any special characters.', 'bad', alertIndicator);
                    usernameInput.classList.add('error');
                    setTimeout(() => {
                        usernameInput.classList.remove('error');
                    }, 500);
                } else if (error.message === 'Seriously?') { // Check to see if the entered username contains any profane words.
                    showIndicator('Seriously?', 'bad', alertIndicator);
                    usernameInput.classList.add('error');
                    setTimeout(() => {
                        usernameInput.classList.remove('error');
                    }, 500);
                } else { // All other unknown errors.
                    showIndicator('An unknown error has occurred, please try again later.', 'bad', alertIndicator);
                }
            }
        };

        passwordInput.addEventListener('input', handlePasswordInput);
        form.addEventListener('submit', handleFormSubmission);

        return () => {
            passwordInput.removeEventListener('input', handlePasswordInput);
            form.removeEventListener('submit', handleFormSubmission);
        }
    }, []);

    return (
        <>
            <AlertIndicator />
            <div id = "register-container">
                <div id = "register-box">
                    <p id = "welcome">Join the Fight!</p>
                    <form id = "registration-form">
                        <p id = "email-text">Email</p>
                        <input type = "text" id = "email" name = "email" placeholder = "Email"/>
                        <p id = "username-text">Username</p>
                        <input type = "text" id = "username" name = "username" placeholder = "Username"/>
                        <p id = "password-text">Password</p>
                        <input type = "password" id = "password" name = "password" placeholder= "Password"/>
                        <p id = "requirements">Must Contain:
                            <span id = "length"> 8 Letters, </span>
                            <span id = "numbers">1 Number, </span>
                            <span id = "special">& 1 Special Character</span>
                        </p>
                        <button type = "submit" id = "submit" disabled>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}