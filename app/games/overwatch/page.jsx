'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import GuessGrid from '@/app/components/guess-grid/GuessGrid';

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function OverwatchPage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'Pixele - Overwatch 2';
        setBackground(backgrounds.overwatch.game);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <GuessGrid
                    gameId="overwatch"
                    attributes={['Hero', 'Role', 'Country', 'Gender', 'Age', 'Year']}
                    maxGuesses={5}
                    inputPlaceholder="Select your Hero..."
                />
            </main>
        </>
    );
}