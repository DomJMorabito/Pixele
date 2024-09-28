"use client";

// CSS Imports:

import "./LoginModal.css";

export default function LoginModal() {
    return (
        <>
            <div id = "error-indicator"></div>
            <div id = "login-container">
                <div id = "login-box">
                    <p id = "welcome-back">Get Back In There!</p>
                    <form id = "login-form">
                        <p id = "username-email-text">Username/Email</p>
                        <input type = "text" id = "username-email" name = "username-email" placeholder = "Enter your Username or Email"/>
                        <p id = "password-text">Password</p>
                        <input type = "password" id = "password" name = "password" placeholder= "Enter your Password"/>
                        <button type = "submit" id = "submit" disabled>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}