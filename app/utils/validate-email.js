/**
 * Validates an email address format.
 *
 * @param {string} email - The email string to validate.
 * @returns {boolean} - Returns true if the email is valid, false otherwise.
 */
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}