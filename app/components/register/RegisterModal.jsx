"use client";

// CSS Imports:

import "./RegisterModal.css";

export default function RegisterModal() {
    return (
        <>
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
                            <span id = "length">8 Letters, </span>
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