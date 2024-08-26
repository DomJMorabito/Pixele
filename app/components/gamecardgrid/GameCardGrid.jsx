import GameCard from '../gamecard/GameCard';
import './GameCardGrid.css';

function GameCardGrid() {
    const games = [
        {
            id: 'overwatch',
            bgImage: '/gamecard/overwatch/background.png',
            logoSrc: '/gamecard/overwatch/logo.png',
            altText: 'Overwatch',
            extraContent: (
                <div className="game-title">Overwatch</div>
            ),
        },
        {
            id: 'ssb',
            bgImage: '/gamecard/ssb/background.png',
            logoSrc: '/gamecard/ssb/logo.png',
            altText: 'Super Smash Bros. Logo',
            extraContent: (
                <div className="game-title">Super Smash Bros.</div>
            ),
        },
        {
            id: 'pokemon',
            bgImage: '/gamecard/pokemon/background.png',
            logoSrc: '/gamecard/pokemon/logo.png',
            altText: 'Pokémon Logo',
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
            extraContent: (
                <div className="game-title"><div className = "text-wrapper">Valorant</div></div>
            ),
        },
        {
            id: 'r6',
            bgImage: '/gamecard/r6/background.png',
            logoSrc: '/gamecard/r6/logo.png',
            altText: 'Rainbow Six Siege',
            extraContent: (
                <div className="game-title">Rainbow Six Siege</div>
            ),
        },
        {
            id: 'minecraft',
            bgImage: '/gamecard/minecraft/background.png',
            logoSrc: '/gamecard/minecraft/logo.png',
            altText: 'Minecraft Logo',
            extraContent: (
                <div className="game-title">Minecraft</div>
            ),
        },
        {
            id: 'clashroyale',
            bgImage: '/gamecard/clashroyale/background.png',
            logoSrc: '/gamecard/clashroyale/logo.png',
            altText: 'Clash Royale Logo',
            extraContent: (
                <div className="game-title">Clash Royale</div>
            ),
        },
        {
            id: 'pvz',
            bgImage: '/gamecard/pvz/background.png',
            logoSrc: '/gamecard/pvz/logo.png',
            altText: 'Plants Vs. Zombies 2 Logo',
            extraContent: (
                <div className="game-title">Plants Vs. Zombies 2</div>
            ),
        },
    ];

    return (
        <div id="game-card-grid">
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    id={game.id}
                    bgImage={game.bgImage}
                    logoSrc={game.logoSrc}
                    altText={game.altText}
                >
                    {game.extraContent}
                </GameCard>
            ))}
        </div>
    );
}

export default GameCardGrid;