// Utils Imports:

import { LoginError, LoginErrorCode } from '@/app/error/login/LoginError';

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
                data.required
            )
        case 'INVALID_INPUT':
            return new LoginError(
                'All inputs must be valid.',
                LoginErrorCode.INVALID_INPUT,
                data.required
            )
        case 'INVALID_CREDENTIALS':
            return new LoginError(
                'Email/Username or Password is incorrect.',
                LoginErrorCode.INVALID_CREDENTIALS,
            )
        case 'CONFIRM_SIGN_UP':
            return new LoginError(
                'Verification incomplete.',
                LoginErrorCode.CONFIRM_SIGN_UP,
                {},
                data.params
            )
        case 'ACCOUNT_LOCKED':
            return new LoginError(
                'Account temporarily locked.',
                LoginErrorCode.ACCOUNT_LOCKED,
                data.required
            )
        case 'DATABASE_ERROR':
            return new LoginError(
                'Unable to complete login. Please try again later.',
                LoginErrorCode.DATABASE_ERROR,
            )
        case 'RATE_LIMIT_EXCEEDED':
            return new LoginError(
                'Too many attempts. Please try again later.',
                LoginErrorCode.RATE_LIMIT_EXCEEDED,
            )
        case 'SERVER_ERROR':
            return new LoginError(
                'Unable to complete login. Please try again later.',
                LoginErrorCode.SERVER_ERROR,
            )
        default:
            return new LoginError(
                data.message || 'An unknown error occurred.',
                LoginErrorCode.UNKNOWN_ERROR,
            )
    }
}