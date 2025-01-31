// Next.js Imports:

import Image from 'next/image';

// React Imports:

import React, { useEffect, useState } from 'react';

// CSS Imports:

import '@/app/components/guess-grid/components/attribute-indicator/AttributeIndicator.css'
import '@/app/components/guess-grid/components/attribute-indicator/games/Overwatch.css'
import '@/app/components/guess-grid/components/attribute-indicator/games/SSB.css'
import '@/app/components/guess-grid/components/attribute-indicator/games/Pokémon.css'
import '@/app/components/guess-grid/components/attribute-indicator/games/Valorant.css'
import '@/app/components/guess-grid/components/attribute-indicator/games/R6.css'
import '@/app/components/guess-grid/components/attribute-indicator/games/Minecraft.css'
import '@/app/components/guess-grid/components/attribute-indicator/games/ClashRoyale.css'
import '@/app/components/guess-grid/components/attribute-indicator/games/PVZ.css'

const AttributeIndicator = ({ attributeId, imgSrc, text, guesses, gameId }) => {
    const [state, setState] = useState('default');

    useEffect(() => {
        if (!guesses || guesses.length === 0) {
            setState('default');
            return;
        }

        for (const guess of guesses) {
            if (guess.id === attributeId) {
                setState(guess.results[0] ? 'correct' : 'incorrect');
                return;
            }
        }
    }, [guesses, attributeId]);

    const className = [
        'attribute-indicator',
        `${gameId}-attribute-indicator`,
        state !== 'default' ? state : ''
    ].filter(Boolean).join(' ');

    return (
        <div
            id={`${gameId}-${attributeId}`}
            className={className}
        >
            {imgSrc && (
                <Image
                    src={imgSrc}
                    alt=""
                    width={100}
                    height={100}
                    className={`attribute-indicator-icon ${gameId}-attribute-indicator-icon`}
                />
            )}
            {text && <span className="attribute-text">{text}</span>}
        </div>
    );
}

export default AttributeIndicator;