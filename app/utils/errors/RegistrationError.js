/**
 * Error codes for different verification-related error scenarios
 */
export const RegistrationErrorCode = {
    MISSING_FIELDS: 'MISSING_FIELDS',               // Required fields are missing
    INVALID_EMAIL: 'INVALID_EMAIL',                 // Email format is invalid
    INVALID_USERNAME: 'INVALID_USERNAME',           // Username format/length invalid
    INVALID_PASSWORD: 'INVALID_PASSWORD',           // Password requirements not met
    INAPPROPRIATE_CONTENT: 'INAPPROPRIATE_CONTENT', // Profanity/inappropriate content
    EMAIL_EXISTS: 'EMAIL_EXISTS',                   // Email already taken
    USERNAME_EXISTS: 'USERNAME_EXISTS',             // Username already taken
    DUPLICATE_CREDENTIALS: 'DUPLICATE_CREDENTIALS', // Both email and username taken
    VALIDATION_ERROR: 'VALIDATION_ERROR',           // Generic validation error
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',     // Too many attempts
    SERVER_ERROR: 'SERVER_ERROR',                   // Internal server error
    NETWORK_ERROR: 'NETWORK_ERROR',                 // Connection Issues
    UNKNOWN_ERROR: 'UNKNOWN_ERROR'                  // Fallback for unexpected errors
};

/**
 * Custom error class for handling registration-related errors
 * Extends the built-in Error class to add structured error handling
 *
 * @extends Error
 */
export class RegistrationError extends Error {
    /**
     * Creates a new VerificationError
     *
     * @param {string} message - User-friendly error message
     * @param {string} code - Error code from RegistrationErrorCodes
     * @param {Object} [details] - Additional error details (optional)
     */
    constructor(message, code, details = {}) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, RegistrationError);
        }

        this.name = 'RegistrationError';
        this.code = code;
        this.details = details;
        this.timestamp = new Date().toISOString();
    }

    /**
     * Converts the error to a user-friendly format
     * Useful for logging or sending to error tracking services
     *
     * @returns {Object} Formatted error object
     */
    toJSON() {
        return {
            name: this.name,
            code: this.code,
            message: this.message,
            details: this.details,
            timestamp: this.timestamp,
            stack: this.stack
        };
    }
}