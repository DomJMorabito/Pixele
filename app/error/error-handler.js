// Utils Imports:

import { handleRegistrationError } from '@/app/error/register/error-handler';
import { handleVerificationError } from '@/app/error/verification/error-handler';
import { handleLoginError } from '@/app/error/login/error-handler';
import { handleAuthError } from "@/app/error/auth/error-handler";
import { handleLogoutError } from '@/app/error/logout/error-handler';
import { handleGameError } from '@/app/error/game/error-handler';

/**
 * Creates an appropriate error instance based on the API response
 * @param {number} status - HTTP status code
 * @param {Object} data - Response data from the API
 * @param {string} errorType - Type of error to create ('registration' | 'verification' | etc.)
 * @returns {Error} Appropriate error instance
 */
export const createErrorFromResponse = (status, data, errorType) => {
    switch (errorType.toLowerCase()) {
        case 'registration':
            return handleRegistrationError(status, data)
        case 'verification':
            return handleVerificationError(status, data)
        case 'login':
            return handleLoginError(status, data)
        case 'auth':
            return handleAuthError(status, data)
        case 'logout':
            return handleLogoutError(status, data)
        case 'game':
            return handleGameError(status, data)
        default:
            return new Error(data.message || 'An unknown error occurred');
    }
};