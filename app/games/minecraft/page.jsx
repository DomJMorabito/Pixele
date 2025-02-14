'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import GuessGrid from "@/app/components/guess-grid/GuessGrid";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function MinecraftPage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'Pixele - Minecraft';
        setBackground(backgrounds.minecraft.game);
        return () => {
            setBackground(backgrounds.homescreen);
        }

    }, [setBackground]);

    return (
        <>
            <main>
                <GuessGrid
                    gameId="minecraft"
                    attributes={['Mob', 'Realm', 'Behavior', 'Health', 'Height', 'Release Update']}
                    maxGuesses={5}
                    inputPlaceholder="Select your Mob..."
                />
            </main>
        </>
    );
}