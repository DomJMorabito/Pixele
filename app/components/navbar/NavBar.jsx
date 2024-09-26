"use client";

// Next.js Imports:

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';

//Utils Imports:

import { debounce } from '../../utils/debounce';

// CSS Imports:

import './NavBar.css';

function NavBar() {

    const router = useRouter();
    const [isVisible, setVisible] = useState(false);
    const handleClick = () => {
        router.push('/');
    }

    const show = () => {
        setVisible(true);
    }

    const hide = useMemo(() => debounce(() => setVisible(false), 500), []);

    const loginRouter = () => {
        router.push('/login');
    }

    const registerRouter = () => {
        router.push('/register');
    }

    const clearHide = () => {
        hide.cancel && hide.cancel();
        setVisible(true);
    }

    return (
        <nav>
            <div id = "logo-container">
                <div id = "pixele-logo-container">
                    <Image
                        id = "pixele-logo"
                        src = "/navbar/pixele-logo.png"
                        alt = "Pixele Logo"
                        width = {100}
                        height = {100}
                        onClick = {handleClick}
                    />
                </div>
            </div>
            <div id = "options-container">
                <span className = "material-symbols-outlined" id = "settings">settings</span>
                <div
                    id = "account-section"
                    onMouseEnter = {show}
                    onMouseLeave = {hide}
                >
                    <span className = "material-symbols-outlined" id = "account">account_circle</span>
                    <div id = "account-name">Account</div>
                    <span className = "material-symbols-outlined" id = "chevron-down">expand_more</span>
                    <div
                        id = "account-modal"
                        className = {isVisible ? 'show' : ''}
                        onMouseEnter = {clearHide}
                        onMouseLeave = {hide}
                    >
                        <button id = "login-logout-button" onClick = {loginRouter}>Login</button>
                        <div id = "sign-up-section" onClick = {registerRouter}>
                            <div id="sign-up-text"><span className="material-symbols-outlined" id="sign-up">person_add</span>Sign Up</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;