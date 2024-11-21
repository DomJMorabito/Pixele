'use client';

// Next.js Imports:

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// React Imports:

import { useState, useMemo } from 'react';

//Utils Imports:

import { debounce } from '../../utils/ui/debounce';

// CSS Imports:

import './NavBar.css';

function NavBar() {

    const router = useRouter();
    const [isVisible, setVisible] = useState(false);

    // Handles redirecting the user back to the home screen when the Pixele logo is pressed.
    const handleClick = () => {
        router.push('/');
    }

    // Handles showing the account modal when hovering over the account section.
    const show = () => {
        setVisible(true);
    }

    // Handles hiding the account modal when hovering over the account section stops. Debounces the function to prevent flickering.
    const hide = useMemo(() => debounce(() => setVisible(false), 500), []);

    // Handles redirecting the user to the login page when the login button is pressed.
    const loginRouter = () => {
        router.push('/login');
    }

    // Handles redirecting the user to the registration page when the sign-up button is pressed.
    const registerRouter = () => {
        router.push('/register');
    }

    // Resets the debounce timer when hovering over the account section starts and stops rapidly to prevent flickering.
    const clearHide = () => {
        hide.cancel && hide.cancel();
        setVisible(true);
    }

    return (
        <nav>
            <div id = 'logo-container'>
                <div id = 'pixele-logo-container'>
                    <Image
                        id = 'pixele-logo'
                        src = 'https://assets.pixele.gg/general/pixele-logo.png'
                        alt = 'Pixele Logo'
                        width = {100}
                        height = {100}
                        onClick = {handleClick}
                    />
                </div>
            </div>
            <div id = 'options-container'>
                <span className = 'material-symbols-outlined' id = 'settings'>settings</span>
                <div
                    id = 'account-section'
                    onMouseEnter = {show}
                    onMouseLeave = {hide}
                >
                    <span className = 'material-symbols-outlined' id = 'account'>account_circle</span>
                    <div id = 'account-name'>Account</div>
                    <span className = 'material-symbols-outlined' id = 'chevron-down'>expand_more</span>
                    <div
                        id = 'account-modal'
                        className = {isVisible ? 'show' : ''}
                        onMouseEnter = {clearHide}
                        onMouseLeave = {hide}
                    >
                        <button id = 'login-logout-button' onClick = {loginRouter}>Login</button>
                        <div id = 'sign-up-section' onClick = {registerRouter}>
                            <div id='sign-up-text'><span className='material-symbols-outlined' id='sign-up'>person_add</span>Sign Up</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;