"use client";

// React Imports:

import { useMemo, useEffect } from 'react';

// Component Imports:

import GameCard from '@/app/components/game-card/GameCard';

//Utils Imports:

import { debounce } from '../../utils/debounce';

// CSS Imports:

import './GameCardGrid.css';

function GameCardGrid() {
    const games = [
        {
            id: 'overwatch',
            logoSrc: '/overwatch/game-card/logo.png',
            altText: 'Overwatch',
            gameLink: '/games/overwatch',
            extraContent: (
                <div className="game-title">Overwatch</div>
            ),
        },
        {
            id: 'ssb',
            logoSrc: '/ssb/game-card/logo.png',
            altText: 'Super Smash Bros. Logo',
            gameLink: '/games/ssb',
            extraContent: (
                <div className="game-title">Super Smash Bros.</div>
            ),
        },
        {
            id: 'pokemon',
            logoSrc: '/pokemon/game-card/logo.png',
            altText: 'Pokémon Logo',
            gameLink: '/games/pokemon',
            extraContent: (
                <div id="pokemon-container">
                    <div id="identifier">#0643</div>
                    <div className="game-title">Pokémon</div>
                    <div id="types">
                        <span id="dragon">Dragon</span>
                        <span id="fire">Fire</span>
                    </div>
                </div>
            ),
        },
        {
            id: 'valorant',
            logoSrc: '/valorant/game-card/logo.png',
            altText: 'Valorant Logo',
            gameLink: '/games/valorant',
            extraContent: (
                <div className="game-title"><div className = "text-wrapper">Valorant</div></div>
            ),
        },
        {
            id: 'r6',
            logoSrc: '/r6/game-card/logo.png',
            altText: 'Rainbow Six Siege',
            gameLink: '/games/r6',
            extraContent: (
                <div className="game-title">Rainbow Six Siege</div>
            ),
        },
        {
            id: 'minecraft',
            logoSrc: '/minecraft/game-card/logo.png',
            altText: 'Minecraft Logo',
            gameLink: '/games/minecraft',
            extraContent: (
                <div className="game-title">Minecraft</div>
            ),
        },
        {
            id: 'clashroyale',
            logoSrc: '/clashroyale/game-card/logo.png',
            altText: 'Clash Royale Logo',
            gameLink: '/games/clashroyale',
            extraContent: (
                <div className="game-title">Clash Royale</div>
            ),
        },
        {
            id: 'pvz',
            logoSrc: '/pvz/game-card/logo.png',
            altText: 'Plants Vs. Zombies 2 Logo',
            gameLink: '/games/pvz',
            extraContent: (
                <div className="game-title">Plants Vs. Zombies 2</div>
            ),
        },
    ];

    // Makes sure that the background image is always set to the default whenever the page is loaded.
    useEffect(() => {
        document.body.classList.forEach(cls => {
            if (cls.endsWith('-background')) {
                document.body.classList.remove(cls);
            }
        });
        document.body.classList.add('homescreen-background');
    }, []);

    // Handles hovering over the GameCard to change the background image to the game specific image.
    const handleHover = useMemo(() => debounce((bgClass) => {
        document.body.classList.forEach(cls => {
            if (cls.endsWith('-background')) {
                document.body.classList.remove(cls);
            }
        });
        document.body.classList.add(bgClass);
    }, 225), []);

    //Handles changing the background image back to the default when hovering over the GameCard stops.
    const handleLeave = useMemo(() => debounce(() => {
        document.body.classList.forEach(cls => {
            if (cls.endsWith('-background')) {
                document.body.classList.remove(cls);
            }
        });
        document.body.classList.add('homescreen-background');
    }, 225), []);

    return (
        <div id="game-card-grid">
            {games.map((game) => (
                <GameCard
                    key = {game.id}
                    id = {game.id}
                    logoSrc = {game.logoSrc}
                    altText = {game.altText}
                    gameLink = {game.gameLink}
                    onHover = {() => handleHover(`${game.id}-homescreen-background`)}
                    onLeave = {handleLeave}
                >
                    {game.extraContent}
                </GameCard>
            ))}
        </div>
    );
}

export default GameCardGrid;