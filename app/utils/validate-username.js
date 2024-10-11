/**
 * Validates the length of the username.
 *
 * @param {string} username - The username string to validate.
 * @param {number} minLength - Minimum length for the username.
 * @param {number} maxLength - Maximum length for the username.
 * @returns {boolean} - Returns true if the username is valid, false otherwise.
 */
export const validateUsername = (username, minLength = 5, maxLength = 18) => {
    return username.length >= minLength && username.length <= maxLength;
}