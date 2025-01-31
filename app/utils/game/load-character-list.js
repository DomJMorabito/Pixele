/**
 * Dynamically imports the character list for a specific game
 * @param {string} gameId - The ID of the game to load characters for
 * @returns {Promise<Array>} The list of characters for the specified game
 */
export const loadCharacterList = async (gameId) => {
    try {
        const characterList = await import((`@/app/games/${gameId}/character-list.js`));
        return characterList.characters;
    } catch (error) {
        console.error(`Error loading character list for ${gameId}:`, error);
        return [];
    }
}