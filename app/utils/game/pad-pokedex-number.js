/**
 * Pads a Pokédex number with leading zeros to ensure proper image file naming.
 * Numbers less than 1000 are padded to 3 digits (e.g., 1 -> "001", 99 -> "099").
 * Numbers 1000 and greater are returned as-is (e.g., 1000 -> "1000").
 *
 * @param {number} number - The Pokédex number to pad
 * @returns {string} The padded number as a string
 *
 * @example
 * padPokedexNumber(1)    // returns "001"
 * padPokedexNumber(25)   // returns "025"
 * padPokedexNumber(199)  // returns "199"
 * padPokedexNumber(1000) // returns "1000"
 */
export const padPokedexNumber = (number) => {
    if (number >= 1000) return number.toString();
    return number.toString().padStart(3, '0');
}