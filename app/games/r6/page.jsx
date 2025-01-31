'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import GuessGrid from "@/app/components/guess-grid/GuessGrid";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function R6Page() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'R6 | Pixele';
        setBackground(backgrounds.r6.game);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <GuessGrid
                    gameId="r6"
                    attributes={['Operator', 'Side', 'Speed', 'Health', 'Gender', 'Release Year']}
                    maxGuesses={5}
                    inputPlaceholder="Choose your Operator..."
                />
            </main>
        </>
    );
}