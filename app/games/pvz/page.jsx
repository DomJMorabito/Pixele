'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import GuessGrid from "@/app/components/guess-grid/GuessGrid";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function PVZPage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'PVZ2 | Pixele';
        setBackground(backgrounds.pvz.game);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <GuessGrid
                    gameId="pvz"
                    attributes={['Plant', 'Family', 'Cost', 'Area', 'Premium', 'Color']}
                    maxGuesses={6}
                    inputPlaceholder="Select your Plant..."
                />
            </main>
        </>
    );
}