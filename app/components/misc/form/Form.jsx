// CSS Imports:

import './Form.css'

const Form = ({
    title,
    onSubmit,
    children,
    className
}) => {
    return (
        <>
            <div id="form-container">
                <div id="form-box">
                    {title && <p id="form-title">{title}</p>}
                    <form
                        id="form"
                        onSubmit={onSubmit}
                        className={className}
                    >
                        {children}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;