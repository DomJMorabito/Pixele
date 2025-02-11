/**
 * Error codes for different auth-related error scenarios.
 */
export const AuthErrorCode = {
    NO_SESSION: 'NO_SESSION',                       // No session found with token
    SESSION_EXPIRED: 'SESSION_EXPIRED',             // Expired session
    INVALID_SESSION: 'INVALID_SESSION',             // Invalid/Expired session
    USER_NOT_FOUND: 'USER_NOT_FOUND',               // No user found with token
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',     // Too many requests
    SERVER_ERROR: 'SERVER_ERROR',                   // Internal server error
    NETWORK_ERROR: 'NETWORK_ERROR',                 // Connection Issues
    UNKNOWN_ERROR: 'UNKNOWN_ERROR'                  // Fallback for unexpected errors
}

/**
 * Custom error class for handling auth-related errors
 * Extends the built-in Error class to add structured error handling
 *
 * @extends Error
 */
export class AuthError extends Error {
    /**
     * Creates a new AuthError
     *
     * @param {string} message - User-friendly error message
     * @param {string} code - Error code from AuthErrorCodes
     * @param {Object} [details] - Additional error details (optional)
     */
    constructor(message, code, details = {}) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AuthError);
        }

        this.name = 'AuthError';
        this.code = code;
        this.details = details;
    }
}