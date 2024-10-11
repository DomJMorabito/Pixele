// Node.js Imports:

const crypto = require('crypto');

/**
 * Generates a secure verification token.
 *
 * @returns {string} - A randomly generated 64-character token.
 */
export const generateVerificationToken = () => {
    return crypto.randomBytes(32).toString('hex');
}