// CSS Imports:

import '@/app/components/misc/input/Input.css';

const Input = ({
    id,
    label,
    placeholder
}) => {
    return (
        <>
            <p id={`${id}-text`}>{label}</p>
            <input
                type="text"
                id={id}
                className="form-input"
                placeholder={placeholder}
            />
        </>
    );
};

export default Input;