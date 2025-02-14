/**
 * Error codes for different logout-related error scenarios
 */
export const LogoutErrorCode = {
    NO_SESSION: 'NO_SESSION',           // User is not currently logged in
    LOGOUT_FAILED: 'LOGOUT_FAILED',     // General logout failure
    SERVER_ERROR: 'SERVER_ERROR',       // Internal server error
    NETWORK_ERROR: 'NETWORK_ERROR',     // Connection Issues
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',     // Fallback for unexpected error
};

/**
 * Custom error class for handling logout-related error
 * Extends the built-in Error class to add structured error handling
 *
 * @extends Error
 */
export class LogoutError extends Error {
    /**
     * Creates a new LogoutError
     *
     * @param {string} message - User-friendly error message
     * @param {string} code - Error code from LogoutErrorCodes
     */
    constructor(message, code) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, LogoutError);
        }

        this.name = 'LogoutError';
        this.code = code;
    }
}