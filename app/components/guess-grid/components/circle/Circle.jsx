// Next.js Imports:

import Image from "next/image";

// React Imports:

import React, { useEffect } from "react";

// Utils Imports:

import { formatGameId } from "@/app/utils/game/format-game-id";

// CSS Imports:

import '@/app/components/guess-grid/components/circle/Circle.css';

const Circle = ({ rowIndex, circleIndex, result, className, gameId }) => {

    useEffect(() => {
        if (gameId) {
            import(`@/app/components/guess-grid/components/circle/games/${formatGameId(gameId)}.css`);
        }
    }, [gameId]);

    const combinedClassName = `circle ${className}`.trim();
    return (
        <div
            key={`circle-${rowIndex}-${circleIndex}`}
            id={`circle-${rowIndex + 1}-${circleIndex + 1}`}
            className={combinedClassName}
        >
            {result?.icon && (
                <div className='icon-container'>
                    <Image
                        src={result.icon}
                        alt=""
                        fill
                    />
                </div>
            )}
            {result?.attributeIcon && (
                <div className="attribute-icon-container">
                    <Image
                        src={result.attributeIcon}
                        alt=""
                        fill
                    />
                </div>
            )}
        </div>
    );
}

export default Circle;