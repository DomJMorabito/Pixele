/**
 * Error codes for different login-related error scenarios
 */
export const LoginErrorCode = {
    MISSING_FIELDS: 'MISSING_FIELDS',                   // Required fields are missing
    USER_NOT_FOUND: 'USER_NOT_FOUND',                   // No user found with provided identifier
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',         // Email/Username or Password is incorrect
    ACCOUNT_LOCKED: 'ACCOUNT_LOCKED',                   // Too many failed attempts
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',         // Too many attempts
    AUTH_INCOMPLETE: 'AUTH_INCOMPLETE',                 // User must complete MFA/SMS/Email authentication
    INVALID_INPUT: 'INVALID_INPUT',                     // typeof assertion failed
    AUTH_COMPLETION_FAILED: 'AUTH_COMPLETION_FAILED',   // User failed to authorize their account
    TOKEN_UNAVAILABLE: 'TOKEN_UNAVAILABLE',             // No token generated from authentication
    SERVER_ERROR: 'SERVER_ERROR',                       // Internal server error
    NETWORK_ERROR: 'NETWORK_ERROR',                     // Connection Issues
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',                     // Fallback for unexpected errors
}

/**
 * Custom error class for handling login-related errors
 * Extends the built-in Error class to add structured error handling
 *
 * @extends Error
 */
export class LoginError extends Error {
    /**
     * Creates a new LoginError
     *
     * @param {string} message - User-friendly error message
     * @param {string} code - Error code from LoginErrorCodes
     * @param {Object} [details] - Additional error details (optional)
     */
    constructor(message, code, details = {}) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, LoginError);
        }

        this.name = 'LoginError';
        this.code = code;
        this.details = details;
    }
}