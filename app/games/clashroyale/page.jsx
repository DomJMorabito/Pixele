'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import GuessGrid from "@/app/components/guess-grid/GuessGrid";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function ClashRoyalePage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'Clash Royale | Pixele';
        setBackground(backgrounds.clashroyale.game);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <GuessGrid
                    gameId="clashroyale"
                    attributes={['Card', 'Elixir', 'Rarity', 'Type', 'Arena', 'Evolution']}
                    maxGuesses={5}
                    inputPlaceholder="Choose your Card..."
                />
            </main>
        </>
    );
}