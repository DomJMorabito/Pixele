import { LoginError, LoginErrorCode } from '@/app/utils/errors/login/LoginError';

/**
 * Creates a LoginError from an API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data
 * @returns {LoginError}
 */
export const handleLoginError = (status, data) => {
    switch (data.code) {
        case 'MISSING_FIELDS':
            return new LoginError(
                'Username/Email & Password are required.',
                LoginErrorCode.MISSING_FIELDS,
                data.details
            )
        case 'USER_NOT_FOUND':
            return new LoginError(
                'No account associated with this Email/Username.',
                LoginErrorCode.USER_NOT_FOUND,
                data.details
            )
        case 'INVALID_CREDENTIALS':
            return new LoginError(
                'Email/Username or Password is incorrect.',
                LoginErrorCode.INVALID_CREDENTIALS,
                data.details
            )
        case 'ACCOUNT_LOCKED':
            return new LoginError(
                'Account temporarily locked due to too many failed attempts.',
                LoginErrorCode.ACCOUNT_LOCKED,
                data.details
            )
        case 'INVALID_INPUT':
            return new LoginError(
                'All inputs must be valid.',
                LoginErrorCode.INVALID_INPUT,
                data.details
            )
        case 'DATABASE_ERROR':
            return new LoginError(
                'Unable to complete login. Please try again later.',
                LoginErrorCode.DATABASE_ERROR,
                data.details
            )
        case 'RATE_LIMIT_EXCEEDED':
            return new LoginError(
                'Too many attempts. Please try again later.',
                LoginErrorCode.RATE_LIMIT_EXCEEDED,
                data.details
            )
        case 'SERVER_ERROR':
            return new LoginError(
                'Unable to complete login. Please try again later.',
                LoginErrorCode.SERVER_ERROR,
                data.details
            )
        case 'AUTH_INCOMPLETE':
            return new LoginError(
                'Further authorization required.',
                LoginErrorCode.AUTH_INCOMPLETE,
                data.details
            )
        case 'AUTH_COMPLETION_FAILED':
            return new LoginError(
                'Login failed. Please try again.',
                LoginErrorCode.AUTH_COMPLETION_FAILED,
                data.details
            )
        case 'TOKEN_UNAVAILABLE':
            return new LoginError(
                'No access token available after authentication.',
                LoginErrorCode.TOKEN_UNAVAILABLE,
                data.details
            )
        default:
            return new LoginError(
                data.message || 'An unknown error occurred.',
                LoginErrorCode.UNKNOWN_ERROR,
                data.details
            )
    }
}