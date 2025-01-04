/**
 * Error codes for different verification-related error scenarios
 */
export const VerificationErrorCode = {
    MISSING_FIELDS: 'MISSING_FIELDS',           // Username or code missing
    INVALID_CODE: 'INVALID_CODE',               // Verification code validation failed
    USER_NOT_FOUND: 'USER_NOT_FOUND',           // User doesn't exist
    EMAIL_SEND_FAILED: 'EMAIL_SEND_FAILED',     // Failed to send email
    EXPIRED_CODE: 'EXPIRED_CODE',               // Code has expired
    ALREADY_VERIFIED: 'ALREADY_VERIFIED',       // User is already verified
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED', // Too many attempts
    DATABASE_ERROR: 'DATABASE_ERROR',           // Error updating instance of user in RDS
    SERVER_ERROR: 'SERVER_ERROR',               // Internal server error
    NETWORK_ERROR: 'NETWORK_ERROR',             // Connection Issues
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',             // Fallback for unexpected errors
    // FOR PASSWORD RESET
    INVALID_PASSWORD: 'INVALID_PASSWORD',       // Password requirements not met
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
    }
}