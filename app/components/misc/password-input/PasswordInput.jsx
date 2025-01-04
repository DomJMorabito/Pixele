// React Imports:

import { useState } from "react";

// CSS Imports:

import '@/app/components/misc/input/Input.css';
import '@/app/components/misc/password-input/PasswordInput.css';

const PasswordInput = ({
    id,
    label,
    placeholder,
    disabled = false
}) => {
    const [isVisible, setIsVisible] = useState(false);


    const togglePassword = (e) => {
        e.preventDefault();
        const input = e.currentTarget.previousElementSibling;
        input.type = input.type === 'password' ? 'text' : 'password';
        if (!isVisible) {
            const hideOnType = () => {
                setIsVisible(false);
                input.removeEventListener('input', hideOnType);
            };
            input.addEventListener('input', hideOnType);
        }
        setIsVisible(!isVisible);
    };

    return (
        <>
            <p id={`${id}-text`}>{label}</p>
            <div className="password-container">
                <input
                    type={isVisible ? 'text' : 'password'}
                    id={id}
                    className="form-input"
                    placeholder={placeholder}
                    disabled={disabled}
                />
                <span className="toggle-visibility" onClick={togglePassword}>
                    <span className="material-symbols-outlined">
                        {isVisible ? 'visibility_off' : 'visibility'}
                    </span>
                </span>
            </div>
        </>

    );
};

export default PasswordInput;