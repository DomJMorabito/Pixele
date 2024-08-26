import Image from 'next/image';
import './GameCard.css';

function GameCard({ id, bgImage, logoSrc, altText, children }) {
    return (
        <div className = "game-card" id = {id} data-bg = {bgImage}>
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