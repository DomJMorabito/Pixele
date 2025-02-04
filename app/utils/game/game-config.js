// Utils Imports:

import { padPokedexNumber } from '@/app/utils/game/pad-pokedex-number';
import { normalizeCharacterName } from '@/app/utils/game/normalize-character-name';

const gameConfig = {
    overwatch: {
        formatDetails: (character) => ({
            mainLine: character.name,
            details:
                `Role: ${character.role}, 
                Country: ${character.country}, 
                Gender: ${character.gender}, 
                Age: ${character.age}, 
                Release Year: ${character.releaseYear}`
        }),
        getImageSrc: (characterName) => `https://assets.pixele.gg/character/overwatch/crop/${characterName.toLowerCase()}.png`
    },
    ssb: {
        formatDetails: (character) => ({
            mainLine: character.name,
            details:
                `Series: ${character.series}, 
                Species: ${character.species}, 
                Weight: ${character.weight}kg, 
                Gender: ${character.gender}, 
                Release Game: ${character.releaseGame}`
        }),
        getImageSrc: (characterName) => `https://assets.pixele.gg/character/ssb/crop/${characterName.toLowerCase()}.png`
    },
    pokemon: {
        formatDetails: (character) => ({
            mainLine: character.name,
            details:
                `Generation: ${character.generation}, 
                Type 1: ${character.type1}, 
                Type 2: ${character.type2}, 
                Height: ${character.height}m, 
                Weight: ${character.weight}kg`
        }),
        getImageSrc: (_, character) => {
            return `https://assets.pixele.gg/character/pokemon/full/${padPokedexNumber(character.pokedexNumber)}.png`;
        }
    },
    valorant: {
        formatDetails: (character) => ({
            mainLine: character.name,
            details:
                `Role: ${character.role}, 
                Origin: ${character.origin}, 
                Race: ${character.race}, 
                Gender: ${character.gender}, 
                Release Year: ${character.releaseYear}`
        }),
        getImageSrc: (characterName) => `https://assets.pixele.gg/character/valorant/crop/${characterName.toLowerCase()}.png`
    },
    r6: {
        formatDetails: (character) => ({
            mainLine: character.name,
            details:
                `Side: ${character.side}, 
                Speed: ${character.speed}, 
                Health: ${character.health}, 
                Gender: ${character.gender}, 
                Release Year: ${character.releaseYear}`
        }),
        getImageSrc: (characterName) => `https://assets.pixele.gg/character/r6/crop/${characterName.toLowerCase()}.png`
    },
    minecraft: {
        formatDetails: (character) => ({
            mainLine: character.name,
            details:
                `Realm: ${character.realm}, 
                Behavior: ${character.behavior}, 
                Health: ${character.health}hp, 
                Height: ${character.health} Blocks, 
                Release Update: ${character.releaseUpdate}`
        }),
        getImageSrc: (characterName) => `https://assets.pixele.gg/character/minecraft/full/${characterName.toLowerCase()}.png`
    },
    clashroyale: {
        formatDetails: (character) => ({
            mainLine: character.name,
            details:
                `Elixir: ${character.elixir}, 
                Rarity: ${character.rarity}, 
                Type: ${character.type}, 
                Arena: ${character.arena}, 
                Evolution: ${character.evolution}`
        }),
        getImageSrc: (characterName) => `https://assets.pixele.gg/character/clashroyale/crop/${characterName.toLowerCase()}.png`
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