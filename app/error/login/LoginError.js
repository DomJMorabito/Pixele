/**
 * Error codes for different login-related error scenarios.
 */
export const LoginErrorCode = {
    MISSING_FIELDS: 'MISSING_FIELDS',               // Required fields are missing
    INVALID_INPUT: 'INVALID_INPUT',                 // typeof assertion failed
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',     // Email/Username or Password is incorrect
    CONFIRM_SIGN_UP: 'CONFIRM_SIGN_UP',             // Account not confirmed
    ACCOUNT_LOCKED: 'ACCOUNT_LOCKED',               // Account temporarily locked.
    DATABASE_ERROR: 'DATABASE_ERROR',               // could not make insertion/update into database
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',     // Too many attempts
    SERVER_ERROR: 'SERVER_ERROR',                   // Internal server error
    NETWORK_ERROR: 'NETWORK_ERROR',                 // Connection Issues
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',                 // Fallback for unexpected error
}

/**
 * Custom error class for handling login-related error
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
     * @param {Object} [required] - Additional error required (optional)
     * @param {Object} [params] - Additional error params (optional)
     */
    constructor(message, code, required = {}, params = {}) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, LoginError);
        }

        this.name = 'LoginError';
        this.code = code;
        this.required = required;
        this.params = params;
    }
}