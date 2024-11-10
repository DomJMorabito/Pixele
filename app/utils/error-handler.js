// Utils Imports:

import { VerificationError, VerificationErrorCode } from './errors/VerificationError';
import { RegistrationError, RegistrationErrorCode } from './errors/RegistrationError';

/**
 * Creates an appropriate error instance based on the API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data from the API
 * @param {string} errorType - Type of error to create ('registration' | 'verification' | etc.)
 * @returns {Error} Appropriate error instance
 */
export const createErrorFromResponse = (status, data, errorType = 'unknown') => {
    switch (errorType.toLowerCase()) {
        case 'registration':
            return handleRegistrationError(status, data);
        case 'verification':
            return handleVerificationError(status, data);
        default:
            return new Error(data.message || 'An unknown error occurred');
    }
};

/**
 * Creates a RegistrationError from an API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data
 * @returns {RegistrationError}
 */
const handleRegistrationError = (status, data) => {
    switch (data.code) {
        case 'MISSING_FIELDS':
            return new RegistrationError(
                'All fields are required',
                RegistrationErrorCode.MISSING_FIELDS,
                data.details
            )
        case 'INVALID_EMAIL':
            return new RegistrationError(
                'Enter a valid email',
                RegistrationErrorCode.INVALID_EMAIL,
                data.details
            )
        case 'INVALID_USERNAME':
            if (data.details?.requirements?.allowedCharacters) {
                return new RegistrationError(
                    'Username cannot contain special characters.',
                    RegistrationErrorCode.INVALID_USERNAME,
                    data.details
                )
            } else if (data.details?.requirements?.minLength) {
                return new RegistrationError(
                    'Username must be 5-18 characters.',
                    RegistrationErrorCode.INVALID_USERNAME,
                    data.details
                )
            }
            return new RegistrationError(
                'Invalid username format.',
                RegistrationErrorCode.INVALID_USERNAME,
                data.details
            )
        case 'INVALID_PASSWORD':
            return new RegistrationError(
                'Password requirements not met.',
                RegistrationErrorCode.INVALID_PASSWORD,
                data.details
            )
        case 'INAPPROPRIATE_CONTENT':
            return new RegistrationError(
                'Username contains inappropriate content',
                RegistrationErrorCode.INAPPROPRIATE_CONTENT,
                data.details
            )
        case 'EMAIL_EXISTS':
            return new RegistrationError(
                'Email already in use.',
                RegistrationErrorCode.EMAIL_EXISTS,
                data.details
            )
        case 'USERNAME_EXISTS':
            return new RegistrationError(
                'Username already in use.',
                RegistrationErrorCode.USERNAME_EXISTS,
                data.details
            )
        case 'DUPLICATE_CREDENTIALS':
            return new RegistrationError(
                'Both email and username already in use.',
                RegistrationErrorCode.DUPLICATE_CREDENTIALS,
                data.details
            )
        case 'RATE_LIMIT_EXCEEDED':
            return new RegistrationError(
                'Too many attempts. Please try again later.',
                RegistrationErrorCode.RATE_LIMIT_EXCEEDED,
                data.details
            )
        case 'SERVER_ERROR':
            return new RegistrationError(
                'Unable to complete registration. Please try again later.',
                RegistrationErrorCode.SERVER_ERROR,
                data.details
            )
        default:
            return new RegistrationError(
                data.message || 'An unknown error occured.',
                RegistrationErrorCode.UNKNOWN_ERROR,
                data.details
            )
    }
};

/**
 * Creates a VerificationError from an API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data
 * @returns {VerificationError}
 */
const handleVerificationError = (status, data) => {
    switch (data.code) {
        case 'MISSING_FIELDS':
            return new VerificationError(
                'Username and verification code are required.',
                VerificationErrorCode.MISSING_FIELDS,
                data.details
            )
        case 'INVALID_CODE':
            return new VerificationError(
                'Invalid verification code. Please try again.',
                VerificationErrorCode.INVALID_CODE,
                data.details
            )
        case 'USER_NOT_FOUND':
            return new VerificationError(
                'User not found.',
                VerificationErrorCode.USER_NOT_FOUND,
                data.details
            )
        case 'ALREADY_VERIFIED':
            return new VerificationError(
                'This account is already verified.',
                VerificationErrorCode.ALREADY_VERIFIED,
                data.details
            )
        case 'RATE_LIMIT_EXCEEDED':
            return new VerificationError(
                'Too many verification attempts. Please try again later.',
                VerificationErrorCode.RATE_LIMIT_EXCEEDED,
                data.details
            )
        case 'SERVER_ERROR':
            return new VerificationError(
                'Unable to complete verification. Please try again later.',
                VerificationErrorCode.SERVER_ERROR,
                data.details
            )
        default:
            return new VerificationError(
                data.message || 'An unknown error occurred.',
                VerificationErrorCode.UNKNOWN_ERROR,
                data.details
            )
    }
}