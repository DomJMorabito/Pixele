'use client';

// React Imports:

import React from 'react';

// CSS Imports:

import './Credits.css';

export default function Credits({ isVisible, onClose, hasInteracted }) {
    return (
        <div id = 'credits-modal'
             className = {isVisible ? 'show' : hasInteracted ? 'hide' : ''}
        >
            <div id = 'credits-content'>
                <span id = 'close-button' onClick = { onClose }>&times;</span>
                    <p id = 'header'>Credits & Attributions</p>
                    <p id = 'top-line'>All rights reserved to the following studios/publishers:</p>
                    <p id = 'line'>
                        © Blizzard Entertainment, Inc. / © Nintendo / © Riot Games, Inc / © Ubisoft Entertainment /
                        © Mojang AB / © Supercell Oy / © PopCap Games, Inc. / © Electronic Arts Inc. / HAL Laboratory, Inc. /
                        Pokémon. / Creatures Inc. / GAME FREAK Inc. / SHIGESATO ITOI / APE inc. / INTELLIGENT SYSTEMS /
                        Konami Digital Entertainment / SEGA / CAPCOM CO., LTD. / BANDAI NAMCO Entertainment Inc. /
                        MONOLITHSOFT / CAPCOM U.S.A., INC. / SQUARE ENIX CO., LTD. / ATLUS / Microsoft / SNK CORPORATION. / Disney
                    </p>
            </div>
        </div>
    );
}