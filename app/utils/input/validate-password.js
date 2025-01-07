/**
 * Validates that a password meets all required criteria:
 * - Contains at least one number
 * - Contains at least one special character
 * - Meets minimum length requirement
 *
 * @param {boolean} hasNumber - Whether the password contains a number.
 * @param {boolean} hasSpecialChar - Whether the password contains a special character.
 * @param {boolean} isValidLength - Whether the password meets length requirements.
 * @returns {boolean} - Returns true if all password requirements are met, false otherwise.
 */
export const validatePassword = (
        hasNumber,
        hasSpecialChar,
        isValidLength
) => {
    return hasNumber && hasSpecialChar && isValidLength;
}