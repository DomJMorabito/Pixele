// React Imports:

import React, {useEffect} from 'react';

// Component Imports:

import AttributeIndicator from '@/app/components/guess-grid/components/attribute-indicator/AttributeIndicator';

// Utils Imports:

import { formatGameId } from "@/app/utils/game/format-game-id";

// CSS Imports:

import '@/app/components/guess-grid/components/attribute-indicator-container/AttributeIndicatorContainer.css';

const AttributeIndicatorContainer = ({ guesses, gameId, className }) => {
    const gameAttributes = {
        overwatch: [
            {
                id: 'Tank',
                imgSrc: 'https://assets.pixele.gg/indicator/overwatch/role/Tank-Indicator.png',
                text: 'Tank'
            },
            {
                id: 'Damage',
                imgSrc: 'https://assets.pixele.gg/indicator/overwatch/role/Damage-Indicator.png',
                text: 'Damage'
            },
            {
                id: 'Support',
                imgSrc: 'https://assets.pixele.gg/indicator/overwatch/role/Support-Indicator.png',
                text: 'Support'
            },
        ],
        ssb: [
            {
                id: 'Animal Crossing',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Animal Crossing Indicator.png',
            },
            {
                id: 'ARMS',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/ARMS Indicator.png',
            },
            {
                id: 'Banjo-Kazooie',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Banjo-Kazooie Indicator.png',
            },
            {
                id: 'Bayonetta',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Bayonetta Indicator.png',
            },
            {
                id: 'Castlevania',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Castlevania Indicator.png',
            },
            {
                id: 'Donkey Kong',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Donkey Kong Indicator.png',
            },
            {
                id: 'Dragon Quest',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Dragon Quest Indicator.png',
            },
            {
                id: 'Duck Hunt',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Duck Hunt Indicator.png',
            },
            {
                id: 'EarthBound',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/EarthBound Indicator.png',
            },
            {
                id: 'F-Zero',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/F-Zero Indicator.png',
            },
            {
                id: 'Fatal Fury',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Fatal Fury Indicator.png',
            },
            {
                id: 'Final Fantasy',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Final Fantasy Indicator.png',
            },
            {
                id: 'Fire Emblem',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Fire Emblem Indicator.png',
            },
            {
                id: 'Game & Watch',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Game & Watch Indicator.png',
            },
            {
                id: 'Ice Climber',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Ice Climber Indicator.png',
            },
            {
                id: 'Kid Icarus',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Kid Icarus Indicator.png',
            },
            {
                id: 'Kingdom Hearts',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Kingdom Hearts Indicator.png',
            },
            {
                id: 'Kirby',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Kirby Indicator.png',
            },
            {
                id: 'Mario',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Mario Indicator.png',
            },
            {
                id: 'Mega Man',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Mega Man Indicator.png',
            },
            {
                id: 'Metal Gear Solid',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Metal Gear Solid Indicator.png',
            },
            {
                id: 'Metroid',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Metroid Indicator.png',
            },
            {
                id: 'Minecraft',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Minecraft Indicator.png',
            },
            {
                id: 'Pac-Man',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Pac-Man Indicator.png',
            },
            {
                id: 'Persona',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Persona Indicator.png',
            },
            {
                id: 'Pikmin',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Pikmin Indicator.png',
            },
            {
                id: 'Pokémon',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Pokémon Indicator.png',
            },
            {
                id: 'Punch-Out!',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Punch-Out! Indicator.png',
            },
            {
                id: 'R.O.B.',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/R.O.B. Indicator.png',
            },
            {
                id: 'Sonic The Hedgehog',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Sonic The Hedgehog Indicator.png',
            },
            {
                id: 'Splatoon',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Splatoon Indicator.png',
            },
            {
                id: 'SSB',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/SSB Indicator.png',
            },
            {
                id: 'Star Fox',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Star Fox Indicator.png',
            },
            {
                id: 'Street Fighter',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Street Fighter Indicator.png',
            },
            {
                id: 'Tekken',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Tekken Indicator.png',
            },
            {
                id: 'The Legend of Zelda',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/The Legend of Zelda Indicator.png',
            },
            {
                id: 'Wario',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Wario Indicator.png',
            },
            {
                id: 'Wii Fit',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Wii Fit Indicator.png',
            },
            {
                id: 'Xenoblade',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Xenoblade Indicator.png',
            },
            {
                id: 'Yoshi',
                imgSrc: 'https://assets.pixele.gg/indicator/ssb/series/Yoshi Indicator.png',
            }
        ],
        pokemon: [
            {
                id: 'Normal',
                text: 'Normal'
            },
            {
                id: 'Fire',
                text: 'Fire'
            },
            {
                id: 'Water',
                text: 'Water'
            },
            {
                id: 'Grass',
                text: 'Grass'
            },
            {
                id: 'Electric',
                text: 'Electric'
            },
            {
                id: 'Ice',
                text: 'Ice'
            },
            {
                id: 'Fighting',
                text: 'Fighting'
            },
            {
                id: 'Poison',
                text: 'Poison'
            },
            {
                id: 'Ground',
                text: 'Ground'
            },
            {
                id: 'Flying',
                text: 'Flying'
            },
            {
                id: 'Psychic',
                text: 'Psychic'
            },
            {
                id: 'Bug',
                text: 'Bug'
            },
            {
                id: 'Rock',
                text: 'Rock'
            },
            {
                id: 'Ghost',
                text: 'Ghost'
            },
            {
                id: 'Dark',
                text: 'Dark'
            },
            {
                id: 'Dragon',
                text: 'Dragon'
            },
            {
                id: 'Steel',
                text: 'Steel'
            },
            {
                id: 'Fairy',
                text: 'Fairy'
            },
            {
                id: 'Null',
                text: 'Single-Type'
            }
        ],
        valorant: [
            {
                id: 'Controller',
                imgSrc: 'https://assets.pixele.gg/indicator/valorant/role/Controller.png',
                text: 'Controller'
            },
            {
                id: 'Duelist',
                imgSrc: 'https://assets.pixele.gg/indicator/valorant/role/Duelist.png',
                text: 'Controller'
            },
            {
                id: 'Initiator',
                imgSrc: 'https://assets.pixele.gg/indicator/valorant/role/Initiator.png',
                text: 'Initiator'
            },
            {
                id: 'Sentinel',
                imgSrc: 'https://assets.pixele.gg/indicator/valorant/role/Sentinel.png',
                text: 'Sentinel'
            }
        ],
        r6: [
            {
                id: 'Attack',
                imgSrc: 'https://assets.pixele.gg/indicator/r6/side/Attack-Indicator.png',
                text: 'Attack'
            },
            {
                id: 'Defense',
                imgSrc: 'https://assets.pixele.gg/indicator/r6/side/Defense-Indicator.png',
                text: 'Defense'
            }
        ],
        minecraft: [
            {
                id: 'Overworld',
                text: 'Overworld'
            },
            {
                id: 'Nether',
                text: 'Nether'
            },
            {
                id: 'End',
                text: 'End'
            }
        ],
        clashroyale: [
            {
                id: 'Common',
                text: 'Common'
            },
            {
                id: 'Rare',
                text: 'Rare'
            },
            {
                id: 'Epic',
                text: 'Epic'
            },
            {
                id: 'Legendary',
                text: 'Legendary'
            }
        ],
    };

    const attributes = gameAttributes[gameId] || [];

    useEffect(() => {
        if (gameId) {
            import((`@/app/components/guess-grid/components/attribute-indicator-container/games/${formatGameId(gameId)}.css`));
        }
    }, [gameId]);

    return (
        <div id='attribute-indicator-container' className={className}>
            <div id='attribute-indicators'>
                {attributes.map((attribute) => (
                    <AttributeIndicator
                        key={attribute.id}
                        attributeId={attribute.id}
                        imgSrc={attribute.imgSrc}
                        text={attribute.text}
                        guesses={guesses}
                        gameId={gameId}
                    />
                ))}
            </div>
        </div>
    );
}

export default AttributeIndicatorContainer;