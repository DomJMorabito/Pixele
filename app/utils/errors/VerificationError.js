/**
 * Error codes for different verification-related error scenarios
 */
export const VerificationErrorCode = {
    MISSING_FIELDS: 'MISSING_FIELDS',           // Username or code missing
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED', // Too many attempts
    USER_NOT_FOUND: 'USER_NOT_FOUND',           // User doesn't exist
    NETWORK_ERROR: 'NETWORK_ERROR',             // Connection Issues
    SERVER_ERROR: 'SERVER_ERROR',               // Internal server error
    INVALID_CODE: 'INVALID_CODE',               // Verification code validation failed
    EXPIRED_CODE: 'EXPIRED_CODE',               // Code has expired
    ALREADY_VERIFIED: 'ALREADY_VERIFIED',       // User is already verified
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',             // Fallback for unexpected errors
};

/**
 * Custom error class for handling verification-related errors
 * Extends the built-in Error class to add structured error handling
 *
 * @extends Error
 */
export class VerificationError extends Error {
    /**
     * Creates a new VerificationError
     *
     * @param {string} message - User-friendly error message
     * @param {string} code - Error code from VerificationErrorCodes
     * @param {Object} [details] - Additional error details (optional)
     */
    constructor(message, code, details = {}) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, VerificationError);
        }

        this.name = 'VerificationError';
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