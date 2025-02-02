/**
 * Validates that a password meets the minimum length requirement of 8 characters.
 *
 * @param {string} password - The password string to validate.
 * @returns {boolean} - Returns true if password is at least 8 characters long, false otherwise.
 */
export const validatePasswordLength = (password) => {
    return password.length >= 8;
}