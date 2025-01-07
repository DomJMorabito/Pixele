/**
 * Checks if a password contains at least one number.
 *
 * @param {string} password - The password string to validate.
 * @returns {boolean} - Returns true if password contains at least one number (0-9), false otherwise.
 */
export const validatePasswordNumbers = (password) => {
    return /\d/.test(password);
}