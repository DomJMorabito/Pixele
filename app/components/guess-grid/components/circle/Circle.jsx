// Next.js Imports:

import Image from "next/image";

// React Imports:

import React from "react";

// CSS Imports:

import '@/app/components/guess-grid/components/circle/Circle.css';
import '@/app/components/guess-grid/components/circle/games/Overwatch.css'
import '@/app/components/guess-grid/components/circle/games/SSB.css'
import '@/app/components/guess-grid/components/circle/games/Pokémon.css'
import '@/app/components/guess-grid/components/circle/games/Valorant.css'
import '@/app/components/guess-grid/components/circle/games/R6.css'
import '@/app/components/guess-grid/components/circle/games/Minecraft.css'
import '@/app/components/guess-grid/components/circle/games/ClashRoyale.css'
import '@/app/components/guess-grid/components/circle/games/PVZ.css'

const Circle = ({ rowIndex, circleIndex, result, className }) => {
    const combinedClassName = `circle ${className}`.trim();
    return (
        <div
            key={`circle-${rowIndex}-${circleIndex}`}
            id={`circle-${rowIndex + 1}-${circleIndex + 1}`}
            className={combinedClassName}
        >
            {result?.icon && (
                <div className='icon-container'>
                    <Image src={result.icon} alt="" fill />
                </div>
            )}
            {result?.attributeIcon && (
                <div className="attribute-icon-container">
                    <Image src={result.attributeIcon} alt="" fill />
                </div>
            )}
        </div>
    );
}

export default Circle;