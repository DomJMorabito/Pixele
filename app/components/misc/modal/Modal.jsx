'use client';

// React Imports:

import React from 'react';

// CSS Imports:

import '@/app/components/misc/modal/Modal.css';

export default function Modal({
    isVisible,
    onClose,
    hasInteracted,
    children,
    className = ''
}) {
    const handleOverlayClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div
            id = 'modal-overlay'
            className={`${isVisible ? 'overlay-show' : hasInteracted ? 'overlay-hide' : ''}`}
            onClick={handleOverlayClick}
        >
            <div
                id='modal-container'
                className={`${isVisible ? 'modal-show' : hasInteracted ? 'modal-hide' : ''} ${className}`}
            >
                <div id = 'modal-content'>
                    <span id = 'modal-close-button' onClick={onClose}>&times;</span>
                    {children}
                </div>
            </div>
        </div>
    );
}