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
        case 'EMAIL_SEND_FAILED':
            return new VerificationError(
                'Failed to send Email. Please try again soon.',
                VerificationErrorCode.EMAIL_SEND_FAILED,
                data.details
            )
        case 'EXPIRED_CODE':
            return new VerificationError(
                'Verification code expired. Please request a new one.',
                VerificationErrorCode.EXPIRED_CODE,
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
        case 'DATABASE_ERROR':
            return new VerificationError(
                'Unable to complete verification. Please try again later.',
                VerificationErrorCode.DATABASE_ERROR,
                data.details
            )
        case 'SERVER_ERROR':
            return new VerificationError(
                'Unable to complete verification. Please try again later.',
                VerificationErrorCode.SERVER_ERROR,
                data.details
            )
        case 'INVALID_PASSWORD':
            return new VerificationError(
                'Password requirements not met.',
                VerificationErrorCode.INVALID_PASSWORD,
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