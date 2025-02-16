/**
 * Determines the appropriate CSS class for icon containers based on the field type and value.
 * Handles special cases for uniquely shaped flags while providing default handling for standard flags and icons.
 *
 * @param {string} field - The field identifier (e.g., 'country', 'origin', 'role')
 * @param {string | null | undefined} value - The value for the field (e.g., 'np', 'nepal', 'switzerland')
 * @returns {string} The appropriate CSS class name for the container
 *
 * @example
 * // For Nepal's flag
 * getContainerClassName('country', 'nepal') // returns 'special-info-icon-flag-nepal'
 *
 * @example
 * // For Switzerland's square flag
 * getContainerClassName('country', 'switzerland') // returns 'special-info-icon-flag-square'
 *
 * @example
 * // For a standard rectangular flag
 * getContainerClassName('country', 'brazil') // returns 'special-info-icon-flag'
 *
 * @example
 * // For a role icon
 * getContainerClassName('role', 'tank') // returns 'special-info-icon-square'
 */
export const getContainerClassName = (field, value) => {
    if (field !== 'country' && field !== 'origin') {
        return 'special-info-icon-square';
    }

    if (!value) {
        return 'special-info-icon-flag';
    }

    switch (value) {
        case 'Nepal':
            return 'special-info-icon-nepal'
        case 'Switzerland':
            return 'special-info-icon-flag-square';
        default:
            return 'special-info-icon-flag';
    }
};