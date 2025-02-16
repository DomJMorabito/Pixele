/**
 * Checks if a location value is a special case that should not display a flag
 *
 * @param {string | null | undefined} value - The location value to check
 * @returns {boolean} - True if the location is special and should not display a flag
 *
 * @example
 * isSpecialLocation('The Moon') // returns true
 * isSpecialLocation('Morocco') // returns false
 */
export const isSpecialLocation = (value) => {
    if (!value) return false;

    const specialLocations = [
        'Mars',
        'The Moon',
        'Alpha Earth',
        'Alternate Timeline'
    ];

    return specialLocations.includes(value);
}