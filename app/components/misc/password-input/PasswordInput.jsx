// CSS Imports:

import '@/app/components/misc/password-input/PasswordInput.css';

const PasswordInput = ({
    id,
    label,
    placeholder
}) => {
    const togglePassword = (e) => {
        e.preventDefault();
        const input = e.currentTarget.previousElementSibling;
        const icon = e.currentTarget.querySelector('.material-symbols-outlined');
        input.type = input.type === 'password' ? 'text' : 'password';
        icon.textContent = input.type === 'password' ? 'visibility' : 'visibility_off';
    };

    return (
        <>
            <p id={`${id}-text`}>{label}</p>
            <div className="password-container">
                <input
                    type="password"
                    id={id}
                    className="form-input"
                    placeholder={placeholder}
                />
                <span className="toggle-visibility" onClick={togglePassword}>
                    <span className="material-symbols-outlined">visibility</span>
                </span>
            </div>
        </>

    );
};

export default PasswordInput;