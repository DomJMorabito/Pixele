/**
 * Error codes for different registration-related error scenarios.
 */
export const RegistrationErrorCode = {
    MISSING_FIELDS: 'MISSING_FIELDS',               // Required fields are missing
    INVALID_INPUT: 'INVALID_INPUT',                 // typeof assertion failed
    INVALID_EMAIL: 'INVALID_EMAIL',                 // Email format is invalid
    INVALID_USERNAME: 'INVALID_USERNAME',           // Username format/length invalid
    INVALID_PASSWORD: 'INVALID_PASSWORD',           // Password requirements not met
    INAPPROPRIATE_CONTENT: 'INAPPROPRIATE_CONTENT', // Profanity/inappropriate content
    EMAIL_EXISTS: 'EMAIL_EXISTS',                   // Email already taken
    USERNAME_EXISTS: 'USERNAME_EXISTS',             // Username already taken
    DATABASE_ERROR: 'DATABASE_ERROR',               // could not make insertion/update into db
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',     // Too many attempts
    SERVER_ERROR: 'SERVER_ERROR',                   // Internal server error
    NETWORK_ERROR: 'NETWORK_ERROR',                 // Connection Issues
    UNKNOWN_ERROR: 'UNKNOWN_ERROR'                  // Fallback for unexpected error
};

/**
 * Custom error class for handling registration-related error
 * Extends the built-in Error class to add structured error handling
 *
 * @extends Error
 */
export class RegistrationError extends Error {
    /**
     * Creates a new RegistrationError
     *
     * @param {string} message - User-friendly error message
     * @param {string} code - Error code from RegistrationErrorCodes
     * @param {Object} [requirements] - Additional error requirements (optional)
     */
    constructor(message, code, requirements = {}) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, RegistrationError);
        }

        this.name = 'RegistrationError';
        this.code = code;
        this.requirements = requirements;
    }
}