/**
 * Masks an email address while preserving some identifiable parts.
 * Format: first character + *** + last character before @ + domain
 *
 * @param {string} email - The email address to mask
 * @returns {string} The masked email address
 * @throws {Error} If email is invalid or empty
 */
export function maskEmail(email) {
    if (!email || typeof email !== 'string') {
        throw new Error('Invalid email provided.');
    }

    const [localPart, domain] = email.split('@');

    if (!domain) {
        throw new Error('Invalid email provided.');
    }

    if (localPart.length <= 2) {
        return `${localPart[0]}***@${domain}`;
    }

    return `${localPart[0]}***${localPart[localPart.length - 1]}@${domain}`;
}