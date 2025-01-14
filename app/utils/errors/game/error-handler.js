import { GameError, GameErrorCode } from '@/app/utils/errors/game/GameError';

/**
 * Creates a GameError from an API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data
 * @returns {GameError}
 */
export const handleGameError = (status, data) => {
    switch (data.code) {
        case 'MISSING_FIELDS':
            return new GameError(
                'All fields are required.',
                GameErrorCode.MISSING_FIELDS,
                data.details
            )
        default:
            return new GameError(
                data.message || 'An unknown error occurred.',
                GameError.UNKNOWN_ERROR,
                data.details
            )
    }
};