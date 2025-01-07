// React Imports:

import React, {createContext, useContext, useCallback, useState, useRef} from 'react';

const AlertContext = createContext(null);

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState({
        message: '',
        type: 'bad',
        isVisible: false,
    });

    const timeoutRef = useRef(null);

    const showAlert = useCallback((message, type = 'bad') => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setAlert({
            message,
            type,
            isVisible: true
        });

        timeoutRef.current = setTimeout(() => {
            setAlert(prev => ({
                ...prev,
                isVisible: false
            }));

            setTimeout(() => {
                setAlert(prev => ({
                    ...prev,
                    message: ''
                }));
            }, 500);
        }, 3000);
    }, []);

    return (
        <AlertContext.Provider value={{ alert, showAlert }}>
            {children}
        </AlertContext.Provider>
    );
}

export function useAlert() {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider.');
    }
    return context;
}