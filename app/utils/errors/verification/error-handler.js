// Utils Imports:

import { VerificationError, VerificationErrorCode } from '@/app/utils/errors/verification/VerificationError';

/**
 * Creates a VerificationError from an API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data
 * @returns {VerificationError}
 */
export const handleVerificationError = (status, data) => {
    switch (data.code) {
        case 'MISSING_FIELDS':
            return new VerificationError(
                'Username and verification code are required.',
                VerificationErrorCode.MISSING_FIELDS,
                data.requirements
            )
        case 'INVALID_INPUT':
            return new VerificationError(
                'Input must be valid.',
                VerificationErrorCode.INVALID_INPUT,
                data.requirements
            )

        case 'INVALID_CREDENTIALS':
            return new VerificationError(
                'Invalid credentials.',
                VerificationErrorCode.INVALID_CREDENTIALS
            )
        case 'DATABASE_ERROR':
            return new VerificationError(
                'Unable to complete verification. Please try again later.',
                VerificationErrorCode.DATABASE_ERROR
            )
        case 'INVALID_CODE':
            return new VerificationError(
                'Invalid verification code. Please try again.',
                VerificationErrorCode.INVALID_CODE
            )
        case 'ALREADY_VERIFIED':
            return new VerificationError(
                'This account is already verified.',
                VerificationErrorCode.ALREADY_VERIFIED
            )
        case 'EXPIRED_CODE':
            return new VerificationError(
                'Verification code expired. Please request a new one.',
                VerificationErrorCode.EXPIRED_CODE
            )
        case 'RATE_LIMIT_EXCEEDED':
            return new VerificationError(
                'Too many verification attempts. Please try again later.',
                VerificationErrorCode.RATE_LIMIT_EXCEEDED
            )
        case 'SERVER_ERROR':
            return new VerificationError(
                'Unable to complete verification. Please try again later.',
                VerificationErrorCode.SERVER_ERROR
            )
        // FOR PASSWORD RESET
        case 'INVALID_PASSWORD':
            return new VerificationError(
                'Password requirements not met.',
                VerificationErrorCode.INVALID_PASSWORD
            )
        case 'CONFIRM_SIGN_UP':
            return new VerificationError(
                'Account verification incomplete',
                VerificationErrorCode.CONFIRM_SIGN_UP,
                {},
                data.params
            )
        default:
            return new VerificationError(
                data.message || 'An unknown error occurred.',
                VerificationErrorCode.UNKNOWN_ERROR
            )
    }
}