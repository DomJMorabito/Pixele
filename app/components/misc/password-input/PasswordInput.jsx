// React Imports:

import { useState, useEffect } from "react";

// CSS Imports:

import '@/app/components/misc/input/Input.css';
import '@/app/components/misc/password-input/PasswordInput.css';

const PasswordInput = ({
    id,
    label,
    placeholder,
    disabled = false,
    value,
    onChange,
    className = '',
    state,
    autoComplete
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const stateClass = state ? state: '';

    useEffect(() => {
        if (disabled && isVisible) {
            setIsVisible(false);
        }
    }, [disabled, isVisible]);

    const togglePassword = (e) => {
        if (disabled) return;
        e.preventDefault();
        const input = e.currentTarget.previousElementSibling;
        input.type = input.type === 'password' ? 'text' : 'password';
        if (!isVisible) {
            const hideOnType = (e) => {
                setIsVisible(false);
                onChange?.(e)
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
                    className={`form-input ${stateClass} ${className}`}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                />
                <span
                    className={`toggle-visibility ${stateClass}`}
                    onClick={togglePassword}
                    style={{cursor: disabled ? 'not-allowed' : 'pointer'}}
                >
                    <div id="visibility-toggle-container">
                        <span className="material-symbols-outlined">
                            {isVisible ? 'visibility_off' : 'visibility'}
                        </span>
                    </div>
                </span>
            </div>
        </>

    );
};

export default PasswordInput;