// Utils Imports:

import { handleRegistrationError } from '@/app/utils/errors/register/error-handler';
import { handleVerificationError } from '@/app/utils/errors/verification/error-handler';
import { handleLoginError } from '@/app/utils/errors/login/error-handler';

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
            return handleRegistrationError(status, data)
        case 'verification':
            return handleVerificationError(status, data)
        case 'login':
            return handleLoginError(status, data)
        default:
            return new Error(data.message || 'An unknown error occurred');
    }
};