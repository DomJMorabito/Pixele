'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import VerifyModal from '@/app/components/verify/VerifyModal';

export default function VerifyPage() {

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
                <VerifyModal />
            </main>
        </>
    )
}