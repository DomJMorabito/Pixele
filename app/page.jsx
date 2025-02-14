'use client';

// React Imports:

import { useEffect } from 'react';

// Component Imports:

import GameCardGrid from '@/app/components/game-card-grid/GameCardGrid';
import Footer from '@/app/components/footer/Footer';

export default function HomeScreen() {
    useEffect(() => {
        document.title = 'Pixele';
    }, []);
    return (
        <>
            <main>
                <GameCardGrid />
            </main>
            <Footer />
        </>
    );
}