'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import GuessGrid from "@/app/components/guess-grid/GuessGrid";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function SSBPage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'Pixele - Super Smash Bros. Ultimate';
        setBackground(backgrounds.ssb.game);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <GuessGrid
                    gameId="ssb"
                    attributes={['Fighter', 'Series', 'Species', 'Weight', 'Gender', 'Release Game']}
                    maxGuesses={6}
                    inputPlaceholder="Choose your Fighter..."
                />
            </main>
        </>
    );
}