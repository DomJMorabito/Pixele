// Utils Imports:

import { AuthError, AuthErrorCode } from '@/app/error/auth/AuthError';

/**
 * Creates a AuthError from an API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data
 * @returns {AuthError}
 */
export const handleAuthError = (status, data) => {
    switch (data.code) {
        case 'NO_SESSION':
            return new AuthError(
                'No user logged in.',
                AuthErrorCode.NO_SESSION,
                data.details
            )
        case 'SESSION_EXPIRED':
            return new AuthError(
                'Current session expired.',
                AuthErrorCode.SESSION_EXPIRED,
                data.details
            )
        case 'INVALID_SESSION':
            return new AuthError(
                'Current session is invalid.',
                AuthErrorCode.INVALID_SESSION,
                data.details
            )
        case 'USER_NOT_FOUND':
            return new AuthError(
                'No user found.',
                AuthErrorCode.USER_NOT_FOUND,
                data.details
            )
        case 'RATE_LIMIT_EXCEEDED':
            return new AuthError(
                'Too many attempts. Please try again later.',
                AuthErrorCode.RATE_LIMIT_EXCEEDED,
                data.details
            )
        case 'SERVER_ERROR':
            return new AuthError(
                'Unable to check auth status. Please try again later.',
                AuthErrorCode.SERVER_ERROR,
                data.details
            )
        default:
            return new AuthError(
                data.message || 'An unknown error occurred.',
                AuthErrorCode.UNKNOWN_ERROR,
                data.details
            )
    }
}