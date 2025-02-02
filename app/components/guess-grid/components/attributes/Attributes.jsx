// React Imports:

import React, { useEffect } from 'react';

// Utils Imports:

import { formatGameId } from "@/app/utils/game/format-game-id";


// CSS Imports:

import '@/app/components/guess-grid/components/attributes/Attributes.css';

const Attributes = ({ attributes, className, gameId }) => {

    useEffect(() => {
        if (gameId) {
            import((`@/app/components/guess-grid/components/attributes/games/${formatGameId(gameId)}.css`));
        }
    }, [gameId]);

    return (
        <div id='attributes' className={className}>
            {attributes.map((attribute, index) => (
                <div key={`attribute-${index}`} className='attribute'>
                    {attribute}
                </div>
            ))}
        </div>
    );
}

export default Attributes;