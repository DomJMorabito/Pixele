"use client";

// React Imports:

import { useMemo, useEffect } from 'react';

// Component Imports:

import GameCard from '../gamecard/GameCard';

//Utils Imports:

import { debounce } from '../../utils/debounce';

// CSS Imports:

import './GameCardGrid.css';

function GameCardGrid() {
    const games = [
        {
            id: 'overwatch',
            bgImage: '/gamecard/overwatch/background.png',
            logoSrc: '/gamecard/overwatch/logo.png',
            altText: 'Overwatch',
            gameLink: '/games/overwatch',
            extraContent: (
                <div className="game-title">Overwatch</div>
            ),
        },
        {
            id: 'ssb',
            bgImage: '/gamecard/ssb/background.png',
            logoSrc: '/gamecard/ssb/logo.png',
            altText: 'Super Smash Bros. Logo',
            gameLink: '/games/ssb',
            extraContent: (
                <div className="game-title">Super Smash Bros.</div>
            ),
        },
        {
            id: 'pokemon',
            bgImage: '/gamecard/pokemon/background.png',
            logoSrc: '/gamecard/pokemon/logo.png',
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
            bgImage: '/gamecard/valorant/background.png',
            logoSrc: '/gamecard/valorant/logo.png',
            altText: 'Valorant Logo',
            gameLink: '/games/valorant',
            extraContent: (
                <div className="game-title"><div className = "text-wrapper">Valorant</div></div>
            ),
        },
        {
            id: 'r6',
            bgImage: '/gamecard/r6/background.png',
            logoSrc: '/gamecard/r6/logo.png',
            altText: 'Rainbow Six Siege',
            gameLink: '/games/r6',
            extraContent: (
                <div className="game-title">Rainbow Six Siege</div>
            ),
        },
        {
            id: 'minecraft',
            bgImage: '/gamecard/minecraft/background.png',
            logoSrc: '/gamecard/minecraft/logo.png',
            altText: 'Minecraft Logo',
            gameLink: '/games/minecraft',
            extraContent: (
                <div className="game-title">Minecraft</div>
            ),
        },
        {
            id: 'clashroyale',
            bgImage: '/gamecard/clashroyale/background.png',
            logoSrc: '/gamecard/clashroyale/logo.png',
            altText: 'Clash Royale Logo',
            gameLink: '/games/clashroyale',
            extraContent: (
                <div className="game-title">Clash Royale</div>
            ),
        },
        {
            id: 'pvz',
            bgImage: '/gamecard/pvz/background.png',
            logoSrc: '/gamecard/pvz/logo.png',
            altText: 'Plants Vs. Zombies 2 Logo',
            gameLink: '/games/pvz',
            extraContent: (
                <div className="game-title">Plants Vs. Zombies 2</div>
            ),
        },
    ];

    // Makes sure that the background image is always set to the default whenever the page is loaded.
    useEffect(() => {
        document.body.style.backgroundImage = `url('/homescreen/background.png')`;
    })

    // Handles hovering over the GameCard to change the background image to the game specific image.
    const handleHover = useMemo(() => debounce((bgImage) => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, 225), []);

    //Handles chaning the background image back to the default when hovering over the GameCard stops.
    const handleLeave = useMemo(() => debounce(() => {
        document.body.style.backgroundImage = `url('/homescreen/background.png')`;
    }, 225), []);

    return (
        <div id="game-card-grid">
            {games.map((game) => (
                <GameCard
                    key = {game.id}
                    id = {game.id}
                    bgImage = {game.bgImage}
                    logoSrc = {game.logoSrc}
                    altText = {game.altText}
                    gameLink = {game.gameLink}
                    onHover = {() => handleHover(game.bgImage)}
                    onLeave = {handleLeave}
                >
                    {game.extraContent}
                </GameCard>
            ))}
        </div>
    );
}

export default GameCardGrid;