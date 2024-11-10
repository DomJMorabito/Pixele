'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

export default function PVZPage() {

    // Makes sure that the background image is always set to the default whenever the page is loaded.
    useEffect(() => {

        document.body.classList.forEach(cls => {
            if (cls.endsWith('-background')) {
                document.body.classList.remove(cls);
            }
        });

        document.body.classList.add('pvz-game-background');

        return () => {
            document.body.classList.remove('pvz-game-background');
        }
    });

    return (
        <>
            <main>
            </main>
        </>
    );
}