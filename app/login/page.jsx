'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import LoginModal from '@/app/components/login/LoginModal';

export default function LoginPage() {
    useEffect(() => {
        document.title = 'Login | Pixele';
    }, []);

    // Makes sure that the background image is always set to the default whenever the page is loaded.
    useEffect(() => {

        document.body.classList.forEach(cls => {
            if (cls.endsWith('-background')) {
                document.body.classList.remove(cls);
            }
        });

        document.body.classList.add('login-background');

        return () => {
            document.body.classList.remove('login-background');
        }
    });

    return (
        <>
            <main>
                <LoginModal />
            </main>
        </>
    );
}