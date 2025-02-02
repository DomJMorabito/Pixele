/**
 * Converts a lowercase game ID to its proper filename case format.
 * This utility is used for dynamically importing game-specific resources
 * where filename casing differs from the internal game ID format.
 *
 * @param {string} gameId - The lowercase game identifier (e.g., 'ssb', 'pvz', 'r6')
 * @returns {string} The properly cased game name for file imports (e.g., 'SSB', 'PVZ', 'R6')
 */
export function formatGameId(gameId) {
    const gameIdMap = {
        'overwatch': 'Overwatch',
        'ssb': 'SSB',
        'pokemon': 'Pokémon',
        'valorant': 'Valorant',
        'r6': 'R6',
        'minecraft': 'Minecraft',
        'clashroyale': 'ClashRoyale',
        'pvz': 'PVZ'
    };

    return gameIdMap[gameId] || gameId;
}