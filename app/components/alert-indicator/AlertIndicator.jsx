// React Imports:

import { useEffect, useState } from 'react';

// Context Imports:

import { useAlert } from '@/app/contexts/AlertProvider';

// CSS Imports:

import '@/app/components/alert-indicator/AlertIndicator.css';

export default function AlertIndicator() {
    const { alert } = useAlert();
    const [isHiding, setIsHiding] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (!isInitialized) return;

        if (alert.isVisible) {
            setIsHiding(false);
        } else {
            setIsHiding(true);
            const timeout = setTimeout(() => {
                setIsHiding(false);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [alert.isVisible]);

    if (!isInitialized) return null;

    const classes = [
        alert.type,
        alert.isVisible ? 'show' : '',
        isHiding ? 'hide' : ''
    ].filter(Boolean).join(' ');

    return (
        <div id='alert-indicator' className={classes}>
            {alert.message}
        </div>
    )
}