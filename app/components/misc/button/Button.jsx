// React Imports:

import React from 'react';

// CSS Imports:

import './Button.css';

const Button = ({
    children,
    loading = false,
    success = false,
    successText = "You're in.",
    type = 'button',
    onClick,
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button ${className} ${success ? 'button__success' : ''}`}
            {...props}
        >
      <span className={`button__content ${loading ? 'button__content--hidden' : 'button__content--visible'}`}>
        {success ? successText : children}
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