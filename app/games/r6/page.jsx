'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

export default function R6Page() {

    // Makes sure that the background image is always set to the default whenever the page is loaded.
    useEffect(() => {

        document.body.classList.forEach(cls => {
            if (cls.endsWith('-background')) {
                document.body.classList.remove(cls);
            }
        });

        document.body.classList.add('r6-game-background');

        return () => {
            document.body.classList.remove('r6-game-background');
        }
    });

    return (
        <>
            <main>
            </main>
        </>
    );
}