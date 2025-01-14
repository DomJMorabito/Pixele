/**
 * Error codes for different game-related error scenarios.
 */

export const GameErrorCode = {
    MISSING_FIELDS: 'MISSING_FIELDS',
    INVALID_INPUT: 'INVALID_INPUT',
    GAME_NOT_FOUND: 'GAME_NOT_FOUND',
    MAX_GUESSES_REACHED: 'MAX_GUESSES_REACHED',
    INVALID_CHARACTER: 'INVALID_CHARACTER',
    GAME_COMPLETED: 'GAME_COMPLETED',
    SERVER_ERROR: 'SERVER_ERROR',                   // Internal server error
    NETWORK_ERROR: 'NETWORK_ERROR',                 // Connection Issues
    UNKNOWN_ERROR: 'UNKNOWN_ERROR'                  // Fallback for unexpected errors
}

/**
 * Custom error class for handling game-related errors
 * Extends the built-in Error class to add structured error handling
 *
 * @extends Error
 */

export class GameError extends Error {
    /**
     * Creates a new GameError
     *
     * @param {string} message - User-friendly error message
     * @param {string} code - Error code from GameErrorCodes
     * @param {Object} [details] - Additional error details (optional)
     */
    constructor(message, code, details) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GameError);
        }

        this.name = 'GameError';
        this.code = code;
        this.details = details;
    }
}