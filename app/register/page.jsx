'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import RegisterModal from '../components/register/RegisterModal';

export default function RegisterPage() {

    // Makes sure that the background image is always set to the default whenever the page is loaded.
    useEffect(() => {

        document.body.classList.forEach(cls => {
            if (cls.endsWith('-background')) {
                document.body.classList.remove(cls);
            }
        });

        document.body.classList.add('register-background');

        return () => {
            document.body.classList.remove('register-background');
        }
    });

    return (
        <>
            <main>
                <RegisterModal />
            </main>
        </>
    );
}