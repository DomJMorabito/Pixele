// React Imports:

import React from 'react';

// CSS Imports:

import '@/app/components/guess-grid/components/attributes/Attributes.css';
import '@/app/components/guess-grid/components/attributes/games/Overwatch.css'
import '@/app/components/guess-grid/components/attributes/games/SSB.css'
import '@/app/components/guess-grid/components/attributes/games/Pokémon.css'
import '@/app/components/guess-grid/components/attributes/games/Valorant.css'
import '@/app/components/guess-grid/components/attributes/games/R6.css'
import '@/app/components/guess-grid/components/attributes/games/Minecraft.css'
import '@/app/components/guess-grid/components/attributes/games/ClashRoyale.css'
import '@/app/components/guess-grid/components/attributes/games/PVZ.css'

const Attributes = ({ attributes, className }) => {
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