// Next.js Imports:

import Image from "next/image";

// React Imports:

import React from "react";

// CSS Imports:

import '@/app/components/guess-grid/components/picture/Picture.css';
import '@/app/components/guess-grid/components/picture/games/Overwatch.css'
import '@/app/components/guess-grid/components/picture/games/SSB.css'
import '@/app/components/guess-grid/components/picture/games/Pokémon.css'
import '@/app/components/guess-grid/components/picture/games/Valorant.css'
import '@/app/components/guess-grid/components/picture/games/R6.css'
import '@/app/components/guess-grid/components/picture/games/Minecraft.css'
import '@/app/components/guess-grid/components/picture/games/ClashRoyale.css'
import '@/app/components/guess-grid/components/picture/games/PVZ.css'

const Picture = ({ rowIndex, picture, className }) => {
    const combinedClassName = `picture ${className}`.trim();
    return (
        <div
            className={combinedClassName}
            id={`picture-${rowIndex + 1}`}
        >
            {picture && (
                <Image src={picture} alt="" fill />
            )}
        </div>
    );
}

export default Picture;