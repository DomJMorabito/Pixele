'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import GuessGrid from "@/app/components/guess-grid/GuessGrid";

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

export default function PokemonPage() {
    const { setBackground } = useBackground();
    useEffect(() => {
        document.title = 'Pokémon | Pixele';
        setBackground(backgrounds.pokemon.game);
        return () => {
            setBackground(backgrounds.homescreen);
        }
    }, [setBackground]);

    return (
        <>
            <main>
                <GuessGrid
                    gameId="pokemon"
                    attributes={['Pokémon', 'Gen.', 'Type 1', 'Type 2', 'Height', 'Weight']}
                    maxGuesses={8}
                    inputPlaceholder="Who's that Pokémon..."
                />
            </main>
        </>
    );
}