import { RegistrationError, RegistrationErrorCode } from '@/app/utils/errors/register/RegistrationError';

/**
 * Creates a RegistrationError from an API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data
 * @returns {RegistrationError}
 */
export const handleRegistrationError = (status, data) => {
    switch (data.code) {
        case 'MISSING_FIELDS':
            return new RegistrationError(
                'All fields are required',
                RegistrationErrorCode.MISSING_FIELDS,
                data.requirements
            )
        case 'INVALID_INPUT':
            return new RegistrationError(
                'Input must be valid.',
                RegistrationErrorCode.INVALID_INPUT,
                data.requirements
            )
        case 'INVALID_EMAIL':
            return new RegistrationError(
                'Enter a valid email',
                RegistrationErrorCode.INVALID_EMAIL
            )
        case 'INVALID_USERNAME':
            return new RegistrationError(
                'Invalid username format.',
                RegistrationErrorCode.INVALID_USERNAME
            )
        case 'INVALID_PASSWORD':
            return new RegistrationError(
                'Password requirements not met.',
                RegistrationErrorCode.INVALID_PASSWORD
            )
        case 'DATABASE_ERROR':
            return new RegistrationError(
                'Could not complete registration. Please try again later.',
                RegistrationErrorCode.DATABASE_ERROR
            )
        case 'INAPPROPRIATE_CONTENT':
            return new RegistrationError(
                'Username contains inappropriate content',
                RegistrationErrorCode.INAPPROPRIATE_CONTENT
            )
        case 'EMAIL_EXISTS':
            return new RegistrationError(
                'Email already in use.',
                RegistrationErrorCode.EMAIL_EXISTS
            )
        case 'USERNAME_EXISTS':
            return new RegistrationError(
                'Username already in use.',
                RegistrationErrorCode.USERNAME_EXISTS
            )
        case 'RATE_LIMIT_EXCEEDED':
            return new RegistrationError(
                'Too many attempts. Please try again later.',
                RegistrationErrorCode.RATE_LIMIT_EXCEEDED
            )
        case 'SERVER_ERROR':
            return new RegistrationError(
                'Unable to complete registration. Please try again later.',
                RegistrationErrorCode.SERVER_ERROR
            )
        default:
            return new RegistrationError(
                data.message || 'An unknown error occurred.',
                RegistrationErrorCode.UNKNOWN_ERROR
            )
    }
};