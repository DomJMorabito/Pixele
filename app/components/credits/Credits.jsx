'use client';

// React Imports:

import React from 'react';

// Component Imports:

import Modal from '@/app/components/misc/modal/Modal';

// CSS Imports:

import '@/app/components/credits/Credits.css';

export default function Credits({ isVisible, onClose, hasInteracted }) {
    return (
        <Modal
            isVisible={isVisible}
            onClose={onClose}
            hasInteracted={hasInteracted}
        >
            <p id = 'header'>Credits & Attributions</p>
            <p id = "top-line">All rights reserved to the following studios/publishers:</p>
            <p id = "line">
                © Blizzard Entertainment, Inc. / © Nintendo / © Riot Games, Inc / © Ubisoft Entertainment /
                © Mojang AB / © Supercell Oy / © PopCap Games, Inc. / © Electronic Arts Inc. / HAL Laboratory, Inc. /
                Pokémon. / Creatures Inc. / GAME FREAK Inc. / SHIGESATO ITOI / APE inc. / INTELLIGENT SYSTEMS /
                Konami Digital Entertainment / SEGA / CAPCOM CO., LTD. / BANDAI NAMCO Entertainment Inc. /
                MONOLITHSOFT / CAPCOM U.S.A., INC. / SQUARE ENIX CO., LTD. / ATLUS / Microsoft / SNK
                CORPORATION. / Disney
            </p>
        </Modal>
    );
}