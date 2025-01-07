// CSS Imports:

import '@/app/components/misc/input/Input.css';

const Input = ({
    id,
    label,
    placeholder,
    disabled = false,
    value,
    onChange,
    className = '',
    state
}) => {
    const stateClass = state ? state : '';

    return (
        <>
            <p id={`${id}-text`}>{label}</p>
            <input
                type="text"
                id={id}
                className={`form-input ${stateClass} ${className}`}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default Input;