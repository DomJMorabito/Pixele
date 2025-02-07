// Next.js Imports:

import Image from "next/image";

// React Imports:

import React, { useEffect } from "react";
import { formatGameId } from "@/app/utils/game/format-game-id";

// CSS Imports:

import '@/app/components/guess-grid/components/picture/Picture.css';

const Picture = ({ rowIndex, picture, className, gameId }) => {

    useEffect(() => {
        if (gameId) {
            import((`@/app/components/guess-grid/components/picture/games/${formatGameId(gameId)}.css`));
        }
    }, [gameId]);

    const combinedClassName = `picture ${className}`.trim();
    return (
        <div
            className={combinedClassName}
            id={`picture-${rowIndex + 1}`}
        >
            {picture && (
                <Image
                    src={picture}
                    alt=""
                    fill
                />
            )}
        </div>
    );
}

export default Picture;