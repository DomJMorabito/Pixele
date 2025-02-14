'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import GuessGrid from "@/app/components/guess-grid/GuessGrid";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function ValorantPage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'Pixele - Valorant';
        setBackground(backgrounds.valorant.game);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <GuessGrid
                    gameId="valorant"
                    attributes={['Agent', 'Role', 'Origin', 'Race', 'Gender', 'Release Year']}
                    maxGuesses={5}
                    inputPlaceholder="Select your Agent..."
                />
            </main>
        </>
    );
}