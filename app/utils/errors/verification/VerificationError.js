/**
 * Error codes for different verification-related error scenarios
 */
export const VerificationErrorCode = {
    MISSING_FIELDS: 'MISSING_FIELDS',           // Username or code missing
    INVALID_INPUT: 'INVALID_INPUT',             // typeof assertion failed
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS', // User could not be found
    DATABASE_ERROR: 'DATABASE_ERROR',           // Error updating instance of user in RDS
    INVALID_CODE: 'INVALID_CODE',               // Verification code validation failed
    ALREADY_VERIFIED: 'ALREADY_VERIFIED',       // User is already verified
    EXPIRED_CODE: 'EXPIRED_CODE',               // Code has expired
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED', // Too many attempts
    SERVER_ERROR: 'SERVER_ERROR',               // Internal server error
    NETWORK_ERROR: 'NETWORK_ERROR',             // Connection Issues
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',             // Fallback for unexpected errors
    // FOR PASSWORD RESET
    INVALID_PASSWORD: 'INVALID_PASSWORD',       // Password requirements not met
    CONFIRM_SIGN_UP: 'CONFIRM_SIGN_UP'          // Unconfirmed account
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
     * @param {Object} [requirements] - Additional error requirements (optional)
     * @param {Object} [params] - Additional error params (optional)
     */
    constructor(message, code, requirements = {}, params = {}) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, VerificationError);
        }

        this.name = 'VerificationError';
        this.code = code;
        this.requirements = requirements;
        this.params = params;
    }
}