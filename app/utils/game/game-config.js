// Utils Imports:

import { padPokedexNumber } from '@/app/utils/game/pad-pokedex-number';
import { normalizeCharacterName } from '@/app/utils/game/normalize-character-name';

const S3_BASE_URL = 'https://assets.pixele.gg';


const gameConfig = {
    overwatch: {
        formatDetails: (character) => ({
            name: character.name,
            details: [
                `Gender: ${character.gender}`,
                `Age: ${character.age}`,
                `Release Year: ${character.releaseYear}`,
            ].join('\n')
        }),
        getImageSrc: (characterName) => `${S3_BASE_URL}/character/overwatch/crop/${characterName.toLowerCase()}.png`,
        specialInfo: {
            items: [
                {
                    type: 'icon',
                    field: 'role',
                    imgPath: (value, gameId) => `${S3_BASE_URL}/indicator/${gameId}/role/${value}-Indicator.png`
                },
                {
                    type: 'icon',
                    field: 'country',
                    imgPath: (value) => `${S3_BASE_URL}/indicator/flags/${value}.png`
                }
            ]
        }
    },
    ssb: {
        formatDetails: (character) => ({
            name: character.name,
            details: [
                `Species: ${character.species}`,
                `Weight: ${character.weight}kg`,
                `Gender: ${character.gender}`,
                `Release Game: ${character.releaseGame}`
            ].join('\n')
        }),
        getImageSrc: (characterName) => `${S3_BASE_URL}/character/ssb/crop/${characterName.toLowerCase()}.png`,
        specialInfo: {
            items: [
                {
                    type: 'icon',
                    field: 'series',
                    imgPath: (value, gameId) => `${S3_BASE_URL}/indicator/${gameId}/series/${value} Indicator.png`
                }
            ]
        }
    },
    pokemon: {
        formatDetails: (character) => ({
            name: character.name,
            details:
                `Generation: ${character.generation}, 
                Height: ${character.height}m, 
                Weight: ${character.weight}kg`
        }),
        getImageSrc: (_, character) => {
            return `${S3_BASE_URL}/character/pokemon/full/${padPokedexNumber(character.pokedexNumber)}.png`;
        },
        specialInfo: {
            items: [
                {
                    type: 'text',
                    field: 'pokedexNumber',
                    className: 'pokedex-number'
                },
                {
                    type: 'text',
                    field: 'type1',
                    className: (value) => `pokemon-type-${value}`
                },
                {
                    type: 'text',
                    field: 'type2',
                    className: (value) => `pokemon-type-${value}`,
                    optional: true
                }
            ]
        }
    },
    valorant: {
        formatDetails: (character) => ({
            name: character.name,
            details:
                `Race: ${character.race}, 
                Gender: ${character.gender}, 
                Release Year: ${character.releaseYear}`
        }),
        getImageSrc: (characterName) => `${S3_BASE_URL}/character/valorant/crop/${characterName.toLowerCase()}.png`,
        specialInfo: {
            items: [
                {
                    type: 'icon',
                    field: 'role',
                    imgPath: (value, gameId) => `${S3_BASE_URL}/indicator/${gameId}/role/${value}.png`
                },
                {
                    type: 'icon',
                    field: 'origin',
                    imgPath: (value) => `${S3_BASE_URL}/indicator/flags/${value}.png`
                }
            ]
        }
    },
    r6: {
        formatDetails: (character) => ({
            name: character.name,
            details:
                `Speed: ${character.speed}, 
                Health: ${character.health}, 
                Gender: ${character.gender}, 
                Release Year: ${character.releaseYear}`

        }),
        getImageSrc: (characterName) => `${S3_BASE_URL}/character/r6/crop/${characterName.toLowerCase()}.png`,
        specialInfo: {
            items: [
                {
                    type: 'icon',
                    field: 'side',
                    imgPath: (value, gameId) => `${S3_BASE_URL}/indicator/${gameId}/side/${value}-Indicator.png`
                }
            ]
        }
    },
    minecraft: {
        formatDetails: (character) => ({
            name: character.name,
            details:
                `Behavior: ${character.behavior}, 
                Health: ${character.health}hp, 
                Height: ${character.health} Blocks, 
                Release Update: ${character.releaseUpdate}`

        }),
        getImageSrc: (characterName) => `${S3_BASE_URL}/character/minecraft/full/${characterName.toLowerCase()}.png`,
        specialInfo: {
            items: [
                {
                    type: 'icon',
                    field: 'realm',
                    imgPath: (value, gameId) => `${S3_BASE_URL}/indicator/${gameId}/block/${value}.png`
                }
            ]
        }
    },
    clashroyale: {
        formatDetails: (character) => ({
            name: character.name,
            details:
                `Rarity: ${character.rarity}, 
                Type: ${character.type}, 
                Arena: ${character.arena}, 
                Evolution: ${character.evolution}`

        }),
        getImageSrc: (characterName) => `${S3_BASE_URL}/character/clashroyale/crop/${characterName.toLowerCase()}.png`,
        specialInfo: {
            items: [
                {
                    type: 'icon',
                    field: 'elixir',
                    imgPath: (value, gameId) => `${S3_BASE_URL}/indicator/${gameId}/elixir/${value}.png`
                }
            ]
        }
    }
}

export const formatCharacterDetails = (character, gameId) => {
    return gameConfig[gameId].formatDetails(character);
}

export const getCharacterImageSrc = (character, gameId) => {
    if (gameId === 'pokemon') {
        return gameConfig[gameId].getImageSrc(character.name, character)
    }
    return gameConfig[gameId].getImageSrc(normalizeCharacterName(character.name));
}

export const getSpecialInfo = (gameId) => {
    return gameConfig[gameId].specialInfo;
}