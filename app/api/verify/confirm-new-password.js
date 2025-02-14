// Utils Imports:

import { VerificationError } from '@/app/error/verification/VerificationError';
import { createErrorFromResponse } from '@/app/error/error-handler';

/**
 * Confirms the new password using the reset code
 *
 * @param {string} username - The username or email of the user
 * @param {string} confirmationCode - The reset code sent to the user's email
 * @param {string} newPassword - The new password to set
 * @returns {Promise<Object>} - A promise that resolves with the server response data
 * @throws {Error} - Throws an error if the confirmation fails
 */
export const confirmNewPassword = async (username, confirmationCode, newPassword) => {
    if (typeof username !== 'string'
        || typeof confirmationCode !== 'string'
        || typeof newPassword !== 'string'
        || !username.trim()
        || !confirmationCode.trim()
        || !newPassword.trim()
    ) {
        throw createErrorFromResponse(400, {
            message: 'Username must be valid.',
            code: 'INVALID_INPUT',
            requirements: [
                typeof username !== 'string' && 'username',
                typeof confirmationCode !== 'string' && 'code',
                typeof newPassword !== 'string' && 'password',
                typeof newPassword !== 'string' && 'confirmPassword'
            ].filter(Boolean)
        }, 'verification');
    }
    try {
        const response = await fetch('https://api.pixele.gg/users/reset-password/confirm-new-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                confirmationCode,
                newPassword
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw createErrorFromResponse(response.status, data, 'verification');
        }

        return data;
    } catch (error) {
        if (error instanceof VerificationError) {
            throw error;
        }

        if (error.message === 'Failed to fetch') {
            throw createErrorFromResponse(500, {
                message: 'Unable to connect to the server. Please check your internet connection.',
                code: 'NETWORK_ERROR'
            }, 'verification');
        }

        throw createErrorFromResponse(500, {
            message: 'An unknown error occurred',
            code: 'UNKNOWN_ERROR'
        }, 'verification')
    }
}