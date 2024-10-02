"use client";

// React Imports:

import {useEffect} from "react";

// Component Imports:

import AlertIndicator from "../../components/alert-indicator/AlertIndicator";

// CSS Imports:

import "./RegisterModal.css";

export default function RegisterModal() {

    useEffect(() => {
        const form = document.getElementById("registration-form");
        const passwordInput = document.getElementById("password");
        const lengthRequirement = document.getElementById("length");
        const numberRequirement = document.getElementById("numbers");
        const specialRequirement = document.getElementById("special");
        const confirmButton = document.getElementById("submit");
        const emailInput = document.getElementById('email');
        const usernameInput = document.getElementById('username');
        const alertIndicator = document.getElementById('alert-indicator');

        const handlePasswordInput = () => {
            const password = passwordInput.value.trim();
            let lengthMet = false;
            let numbersMet = false;
            let specialMet = false;

            if (password === '') { // Handle case where password input box is empty or the user has not typed anything in yet.
                lengthRequirement.classList.remove('requirement-met', 'requirement-not-met');
                numberRequirement.classList.remove('requirement-met', 'requirement-not-met');
                specialRequirement.classList.remove('requirement-met', 'requirement-not-met');
                confirmButton.disabled = true;
                return;
            }

            if (password.length >= 8) { // Check if password is 8 characters or longer.
                lengthRequirement.classList.add('requirement-met');
                lengthRequirement.classList.remove('requirement-not-met');
                lengthMet = true;
            } else {
                lengthRequirement.classList.add('requirement-not-met');
                lengthRequirement.classList.remove('requirement-met');
            }

            if (/\d/.test(password)) { // Check to see if password contains a number.
                numberRequirement.classList.add('requirement-met');
                numberRequirement.classList.remove('requirement-not-met');
                numbersMet = true;
            } else {
                numberRequirement.classList.add('requirement-not-met');
                numberRequirement.classList.remove('requirement-met');
            }

            if (/[^A-Za-z0-9]/.test(password)) { // Check to see if password contains a special character (!, ?, @, etc.).
                specialRequirement.classList.add('requirement-met');
                specialRequirement.classList.remove('requirement-not-met');
                specialMet = true;
            } else {
                specialRequirement.classList.add('requirement-not-met');
                specialRequirement.classList.remove('requirement-met');
            }

            // Check to see if all 3 requirements are met. If they are, activate the submit button.

            confirmButton.disabled = !(lengthMet && numbersMet && specialMet);
        };

        const handleFormSubmission = async (event) => {
            event.preventDefault();
            const email = emailInput.value.trim();
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Check to see if a valid email address was entered.
                showIndicator('Enter a valid email.');
                emailInput.classList.add('error');
                console.log('test');
                setTimeout(() => {
                    emailInput.classList.remove('error');
                }, 300);
                return;
            }

            if (username.length < 5 || username.length > 15) { // Check to see if the entered username is between 5-15 characters long.
                showIndicator('Username must be between 5-15 characters.');
                usernameInput.classList.add('error');
                console.log('hey u');
                setTimeout(() => {
                    usernameInput.classList.remove('error');
                }, 300);
                return;
            }

            try {
                const requestBody = {
                    username: username,
                    email: email,
                    password: password,
                };

                console.log('Sending request to API endpoint with body:', requestBody);

                const response = await fetch('https://api.pixele.gg/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                const data = await response.json();

                if (!response.ok) {
                    if (data.message === 'Both Email and Username are already in use') { // Check to see if both email and username are already present in database (crazy edge case...).
                        //showAlert('Both Email and Username are already in use!');
                        emailInput.classList.add('error');
                        usernameInput.classList.add('error');
                        setTimeout(() => {
                            emailInput.classList.remove('error');
                            usernameInput.classList.remove('error');
                        }, 300);
                    } else if (data.message === 'Email already in use') { // Check to see if email is already present in database.
                        //showAlert('Email already in use!');
                        emailInput.classList.add('error');
                        setTimeout(() => {
                            emailInput.classList.remove('error');
                        }, 300);
                    } else if (data.message === 'Username already in use') { // Check to see if username is already present in database.
                        //showAlert('Username already taken!');
                        usernameInput.classList.add('error');
                        setTimeout(() => {
                            emailInput.classList.remove('error');
                        }, 300);
                    } else { // Other errors.
                        showIndicator('An unknown error has occurred, please try again later.');
                    }
                    return;
                }

                alert('Registration Successful!');
                form.reset();
                confirmButton.disabled = true;
                lengthRequirement.classList.remove('requirement-met', 'requirement-not-met');
                numberRequirement.classList.remove('requirement-met', 'requirement-not-met');
                specialRequirement.classList.remove('requirement-met', 'requirement-not-met');
            } catch (error) {
                console.log('Error:', error);
                alert('An error occurred: ' + error.message);
            }
        };

        const showIndicator = (alert, type = 'bad') => {
            alertIndicator.textContent = alert;
            alertIndicator.classList.remove('good', 'bad');
            alertIndicator.classList.add(type);
            alertIndicator.style.display = 'block';
            alertIndicator.classList.remove('hide');
            alertIndicator.classList.add('show');

            setTimeout(() => {
                alertIndicator.classList.remove('show');
                alertIndicator.classList.add('hide');
                setTimeout(() => {
                    alertIndicator.style.display = 'none';
                    alertIndicator.classList.remove('hide');
                    alertIndicator.classList.remove(type);
                    alertIndicator.textContent = '';
                }, 500);
            }, 1500);
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