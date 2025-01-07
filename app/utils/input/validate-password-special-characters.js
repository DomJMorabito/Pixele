// validate-password-special.js
/**
 * Checks if a password contains at least one special character (any non-alphanumeric character).
 *
 * @param {string} password - The password string to validate.
 * @returns {boolean} - Returns true if password contains at least one special character, false otherwise.
 */
export const validatePasswordSpecialCharacters = (password) => {
    return /[^A-Za-z0-9]/.test(password);
}