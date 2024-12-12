'use client';

// Next.js Imports:

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// React Imports:

import { useState, useMemo, useEffect } from 'react';

// Component Imports:

import Button from "@/app/components/misc/button/Button";

//Utils Imports:

import { debounce } from '@/app/utils/ui/debounce';
import { showIndicator } from "@/app/utils/ui/show-indicator";
import { sendLogoutRequest } from "@/app/utils/api/logout/send-logout-request";
import { LogoutErrorCode } from "@/app/utils/errors/logout/LogoutError";

// CSS Imports:

import '@/app/components/nav-bar/NavBar.css';

function NavBar() {
    const router = useRouter();
    const [isVisible, setVisible] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState({ email: '', username: '' });
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = () => {
        const cookies = document.cookie.split(';').reduce((acc, cookie) => {
            const [key, value] = cookie.trim().split('=');
            acc[key] = value;
            return acc;
        }, {});

        if (cookies.pixele_session && cookies.pixele_user) {
            try {
                const userCookie = JSON.parse(decodeURIComponent(cookies.pixele_user));
                setUserInfo({
                    email: userCookie.email,
                    username: userCookie.username,
                });
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false);
        }
    }

    const handleLogout = async () => {
        setIsLoggingOut(true);
        const alertIndicator = document.getElementById('alert-indicator');

        try {
            await sendLogoutRequest();
            setIsAuthenticated(false);
            setUserInfo({email: '', username: ''});
            showIndicator('See ya!', 'good', alertIndicator);
            await new Promise(resolve => setTimeout(resolve, 2000));
            window.location.reload();
            handleClick();
        } catch (error) {
            switch (error.code) {
                case LogoutErrorCode.LOGOUT_FAILED:
                    showIndicator('Logout failed.', 'bad', alertIndicator);
                    break
                case LogoutErrorCode.NO_SESSION:
                    showIndicator('No user currently logged in.', 'bad', alertIndicator);
                    break
                case LogoutErrorCode.SERVER_ERROR:
                    showIndicator('Internal server error. Please try again later.', 'bad', alertIndicator);
                    break
                default:
                    console.error('Error logging out:', error);
                    showIndicator('An unknown error has occurred, please try again later.', 'bad', alertIndicator);
            }
        } finally {
            setIsLoggingOut(false);
        }
    }

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
                    <div id = 'account-name'>
                        {isAuthenticated ? userInfo.username : 'Account'}
                    </div>
                    <span className = 'material-symbols-outlined' id = 'chevron-down'>expand_more</span>
                    <div
                        id = 'account-modal'
                        className = {isVisible ? 'show' : ''}
                        onMouseEnter = {clearHide}
                        onMouseLeave = {hide}
                    >
                        {isAuthenticated ? (
                            <>
                                <Button
                                    onClick={handleLogout}
                                    className="nav-button"
                                    loading={isLoggingOut}
                                    disabled={isLoggingOut}
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    onClick={loginRouter}
                                    className="nav-button"
                                >
                                    Login
                                </Button>
                                <div id='sign-up-section' onClick={registerRouter}>
                                    <div id='sign-up-text'>
                                        <span className='material-symbols-outlined' id='sign-up'>person_add</span>
                                        Sign Up
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;