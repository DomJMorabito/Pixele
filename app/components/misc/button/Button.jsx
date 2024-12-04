// React Imports:

import React from 'react';

// CSS Imports:

import '@/app/components/misc/button/Button.css';

const Button = ({
    children,
    loading = false,
    success = false,
    error = false,
    successText = "You're in.",
    errorText = 'Uh oh...',
    type = 'button',
    onClick,
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button ${className} ${success ? 'button__success' : ''} ${error ? 'button__error' : ''}`}
            {...props}
        >
      <span className={`button__content ${loading ? 'button__content--hidden' : 'button__content--visible'}`}>
        {success ? successText : error ? errorText : children}
      </span>

            {loading && (
                <div className='button__dots'>
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className='button__dot'
                        />
                    ))}
                </div>
            )}
        </button>
    );
};

export default Button;