// Next.js Imports:

import Image from 'next/image';

// React Imports:

import React, { useEffect, useState } from 'react';

// Utils Imports:

import { formatGameId } from '@/app/utils/game/format-game-id';

// CSS Imports:

import '@/app/components/guess-grid/components/attribute-indicator/AttributeIndicator.css'

const AttributeIndicator = ({ attributeId, imgSrc, text, guesses, gameId }) => {
    const [state, setState] = useState('default');

    useEffect(() => {
        if (gameId) {
            import((`@/app/components/guess-grid/components/attribute-indicator/games/${formatGameId(gameId)}.css`));
        }
    }, [gameId]);

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
                <div className={`attribute-indicator-icon-wrapper ${gameId}-attribute-indicator-icon-wrapper`}>
                    <Image
                        src={imgSrc}
                        alt=""
                        fill
                        className={`attribute-indicator-icon ${gameId}-attribute-indicator-icon`}
                    />
                </div>
            )}
            {text && <span className="attribute-text">{text}</span>}
        </div>
    );
}

export default AttributeIndicator;