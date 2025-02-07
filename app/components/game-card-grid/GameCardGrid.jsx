'use client';

// React Imports:

import { useMemo, useEffect, useState } from 'react';

// Component Imports:

import GameCard from '@/app/components/game-card-grid/components/game-card/GameCard';

// Context Imports:

import { useBackground, backgrounds } from '@/app/contexts/BackgroundProvider';

//Utils Imports:

import { debounce } from '@/app/utils/ui/debounce';

// CSS Imports:

import '@/app/components/game-card-grid/GameCardGrid.css';

function GameCardGrid() {
    const [supportsHover, setSupportsHover] = useState(true);
    const { setBackground, resetBackground } = useBackground();

    const games = [
        {
            id: 'overwatch',
            logoSrc: 'https://assets.pixele.gg/game-card/overwatch/logo.png',
            altText: 'Overwatch',
            gameLink: '/games/overwatch',
            extraContent: (
                <div className='game-title'>Overwatch</div>
            ),
        },
        {
            id: 'ssb',
            logoSrc: 'https://assets.pixele.gg/game-card/ssb/logo.png',
            altText: 'Super Smash Bros. Logo',
            gameLink: '/games/ssb',
            extraContent: (
                <div className='game-title'>Super Smash Bros.</div>
            ),
        },
        {
            id: 'pokemon',
            logoSrc: 'https://assets.pixele.gg/game-card/pokemon/logo.png',
            altText: 'Pokémon Logo',
            gameLink: '/games/pokemon',
            extraContent: (
                <div id='pokemon-container'>
                    <div id='identifier'>#0643</div>
                    <div className='game-title'>Pokémon</div>
                    <div id='types'>
                        <span id='dragon'>Dragon</span>
                        <span id='fire'>Fire</span>
                    </div>
                </div>
            ),
        },
        {
            id: 'valorant',
            logoSrc: 'https://assets.pixele.gg/game-card/valorant/logo.png',
            altText: 'Valorant Logo',
            gameLink: '/games/valorant',
            extraContent: (
                <div className='game-title'><div className = 'text-wrapper'>Valorant</div></div>
            ),
        },
        {
            id: 'r6',
            logoSrc: 'https://assets.pixele.gg/game-card/r6/logo.png',
            altText: 'Rainbow Six Siege Logo',
            gameLink: '/games/r6',
            extraContent: (
                <div className='game-title'>Rainbow Six Siege</div>
            ),
        },
        {
            id: 'minecraft',
            logoSrc: 'https://assets.pixele.gg/game-card/minecraft/logo.png',
            altText: 'Minecraft Logo',
            gameLink: '/games/minecraft',
            extraContent: (
                <div className='game-title'>Minecraft</div>
            ),
        },
        {
            id: 'clashroyale',
            logoSrc: 'https://assets.pixele.gg/game-card/clashroyale/logo.png',
            altText: 'Clash Royale Logo',
            gameLink: '/games/clashroyale',
            extraContent: (
                <div className='game-title'>Clash Royale</div>
            ),
        }
    ];

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: hover)');
        setSupportsHover(mediaQuery.matches);
        const updateHoverSupport = (e) => setSupportsHover(e.matches);
        mediaQuery.addEventListener('change', updateHoverSupport);
        return () => mediaQuery.removeEventListener('change', updateHoverSupport);
    }, []);

    useEffect(() => {
        setBackground(backgrounds.homescreen);
    }, [setBackground]);

    const handleHover = useMemo(() =>
            debounce((gameId) => {
                if (supportsHover && backgrounds[gameId]?.hover) {
                    setBackground(backgrounds[gameId].hover);
                }
            }, 225),
        [supportsHover, setBackground]
    );

    const handleLeave = useMemo(() =>
            debounce(() => {
                if (supportsHover) {
                    resetBackground();
                }
            }, 225),
        [supportsHover, resetBackground]
    )

    return (
        <div id='game-card-grid'>
            {games.map((game, index) => (
                <GameCard
                    key = {game.id}
                    id = {game.id}
                    logoSrc = {game.logoSrc}
                    altText = {game.altText}
                    gameLink = {game.gameLink}
                    onHover = {supportsHover ? () => handleHover(game.id) : undefined}
                    onLeave = {supportsHover ? handleLeave : undefined}
                    delayClass={`delay-${index}`}
                >
                    {game.extraContent}
                </GameCard>
            ))}
        </div>
    );
}

export default GameCardGrid;