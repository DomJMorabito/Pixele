'use client';

// Next.js Imports:

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// React Imports:

import { useState, useMemo } from 'react';

// Component Imports:

import Button from "@/app/components/misc/button/Button";

// Context Imports:

import { useAlert } from '@/app/contexts/AlertProvider';
import { useAuth } from '@/app/contexts/AuthProvider';

//Utils Imports:

import { debounce } from '@/app/utils/ui/debounce';
import { sendLogoutRequest } from "@/app/api/logout/send-logout-request";
import { LogoutErrorCode } from "@/app/error/logout/LogoutError";

// CSS Imports:

import '@/app/components/nav-bar/NavBar.css';

function NavBar() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const [isVisible, setVisible] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const { isAuthenticated, userInfo, refreshAuth } = useAuth();

    const handleLogout = async () => {
        setIsLoggingOut(true);

        try {
            await sendLogoutRequest();
            refreshAuth();
            showAlert('See ya!', 'good');
            await new Promise(resolve => setTimeout(resolve, 2000));
            handleClick();
        } catch (error) {
            switch (error.code) {
                case LogoutErrorCode.LOGOUT_FAILED:
                    console.log(error);
                    showAlert('Logout failed.', 'bad');
                    break
                case LogoutErrorCode.NO_SESSION:
                    console.log(error);
                    showAlert('No user currently logged in.', 'bad');
                    break
                case LogoutErrorCode.SERVER_ERROR:
                    console.log(error);
                    showAlert('Internal server error. Please try again later.', 'bad');
                    break
                default:
                    console.error(error);
                    showAlert('An unknown error has occurred, please try again later.', 'bad');
            }
        } finally {
            setIsLoggingOut(false);
        }
    }

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

    const settingsRouter = () => {
        // router.push('/settings');
        showAlert('Coming soon!', 'good');
    }

    const leaderboardRouter = () => {
        // router.push('/leaderboard');
        showAlert('Coming soon!', 'good');
    }

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
                <span className = 'material-symbols-outlined' id = 'leaderboard' onClick={leaderboardRouter}>bar_chart_4_bars</span>
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
                                <div id = "settings-section" onClick={settingsRouter}>
                                    <div id = "settings-text">
                                        <span className = 'material-symbols-outlined' id = 'settings'>settings</span>
                                        Settings
                                    </div>
                                </div>
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