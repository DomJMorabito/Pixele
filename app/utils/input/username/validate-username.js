/**
 * Validates that a username meets all requirements:
 * - Must be between 5 and 18 characters
 * - Cannot contain special characters (only letters and numbers allowed)
 *
 * @param {string} username - The username string to validate.
 * @param {boolean} isValidLength - Whether the username meets length requirements.
 * @param {boolean} hasNoSpecialChars - Whether the username is free of special characters.
 * @returns {boolean} - Returns true if all username requirements are met, false otherwise.
 */
export const validateUsername = (
    username,
        isValidLength,
        hasNoSpecialChars
) => {
    return username && isValidLength && hasNoSpecialChars;
};