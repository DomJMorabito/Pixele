"use client"

// Next.js Imports:

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// CSS Imports:

import './GameCard.css';

function GameCard({ id, bgImage, logoSrc, altText, gameLink, children, onHover, onLeave }) {

    const router = useRouter();
    const handleClick = () => {
        router.push(gameLink);
    }

    return (
        <div
            className = "game-card"
            id = {id}
            data-bg = {bgImage}
            onClick = {handleClick}
            onMouseEnter = {onHover}
            onMouseLeave = {onLeave}
        >
            <Image 
                src = {logoSrc} 
                alt = {altText}
                className = "game-logo"
                width={500}
                height={500}
            />
            <div className = "game-title-container">
                {children}
            </div>
        </div>
    );
}

export default GameCard;