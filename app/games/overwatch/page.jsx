"use client";

// React Imports:

import { useEffect } from 'react';

// Component Imports:

export default function OverwatchPage() {
    useEffect(() => {
        document.body.classList.add('overwatch-background');
        return () => {
            document.body.classList.remove('overwatch-background');
        }
    }, []);

    return (
        <>
            <main>
            </main>
        </>
    );
}
