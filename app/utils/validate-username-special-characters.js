/**
 * Validates the username for special characters.
 *
 * @param {string} username - The username string to validate.
 * @returns {boolean} - Returns true if the username contains no special characters, false otherwise.
 */
export const validateUsernameSpecialCharacters = (username) => {
    const specialCharRegex = /^[a-zA-Z0-9]+$/;
    return specialCharRegex.test(username);
}