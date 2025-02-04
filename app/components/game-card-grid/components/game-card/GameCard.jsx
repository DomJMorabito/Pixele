'use client'

// Next.js Imports:

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// CSS Imports:

import '@/app/components/game-card-grid/components/game-card/GameCard.css';
import '@/app/components/game-card-grid/components/game-card/games/Overwatch.css';
import '@/app/components/game-card-grid/components/game-card/games/SSB.css';
import '@/app/components/game-card-grid/components/game-card/games/Pokémon.css';
import '@/app/components/game-card-grid/components/game-card/games/Valorant.css';
import '@/app/components/game-card-grid/components/game-card/games/R6.css';
import '@/app/components/game-card-grid/components/game-card/games/Minecraft.css';
import '@/app/components/game-card-grid/components/game-card/games/ClashRoyale.css';

function GameCard({ id, logoSrc, altText, gameLink, children, onHover, onLeave }) {

    const router = useRouter();

    //Handles redirecting the user to the game displayed on the GameCard.
    const handleClick = () => {
        router.push(gameLink);
    };

    return (
            <div
                className = 'game-card'
                id = { id }
                onClick = { handleClick }
                onMouseEnter = { onHover }
                onMouseLeave = { onLeave }
            >
                <Image
                    src = { logoSrc }
                    alt = { altText }
                    className = 'game-logo'
                    width = { 500 }
                    height = { 500 }
                />
                <div className = 'game-title-container'>
                    { children }
                </div>
            </div>
    );
}

export default GameCard;