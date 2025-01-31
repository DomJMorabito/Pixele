/**
 * Normalizes character names for use in image URLs by:
 * - Converting to lowercase
 * - Removing diacritics (accent marks, umlauts)
 * - Converting special characters (ø -> o)
 * - Converting colons to hyphens
 * - Removing forward slashes
 *
 * @param {string} name - The original character name
 * @returns {string} - Normalized name safe for use in URLs
 *
 * @example
 * normalizeCharacterName("Lúcio")          // returns "lucio"
 * normalizeCharacterName("Torbjörn")       // returns "torbjorn"
 * normalizeCharacterName("D.Va")           // returns "d.va"
 * normalizeCharacterName("Soldier: 76")    // returns "soldier-76"
 * normalizeCharacterName("Wrecking Ball")  // returns "wrecking ball"
 * normalizeCharacterName("Kay/O")          // returns "kayo"
 * normalizeCharacterName("Nøkk")           // returns "nokk"
 */
export const normalizeCharacterName = (name) => {
    if (!name) return '';

    return name
        // Convert to lowercase first
        .toLowerCase()
        // Special character conversions
        .replace(/ø/g, 'o')
        // Remove diacritics/accents while preserving base characters
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        // Convert colons to hyphens
        .replace(/:\s*/g, '-')
        // Remove forward slashes
        .replace(/\//g, '')
        // Trim any leading/trailing whitespace
        .trim();
};