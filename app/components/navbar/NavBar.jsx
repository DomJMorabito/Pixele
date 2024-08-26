import Image from 'next/image';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <div id = "logo-container">
                <div id = "pixele-logo-container">
                    <Image
                        id = "pixele-logo"
                        src = "/assets/navbar/pixele-logo.png"
                        alt = "Pixele Logo"
                        width = {100}
                        height = {100}
                    />
                </div>
            </div>
            <div id = "options-container">
                <span className = "material-symbols-outlined" id = "settings">settings</span>
                <div id = "account-section">
                    <span className = "material-symbols-outlined" id = "account">account_circle</span>
                    <div id = "account-name">Account</div>
                    <span className = "material-symbols-outlined" id = "chevron-down">expand_more</span>
                    <div id = "account-modal" className = "modal">
                        <button id = "login-logout-button">Login</button>
                        <div id = "sign-up-section">
                            <span className = "material-symbols-outlined" id = "sign-up">person_add</span>
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;