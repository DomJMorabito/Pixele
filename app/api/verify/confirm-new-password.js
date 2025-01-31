// Utils Imports:

import { VerificationError } from '@/app/utils/errors/verification/VerificationError';
import { createErrorFromResponse } from '@/app/utils/errors/error-handler';

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
    if (typeof username !== 'string' || !username.trim()) {
        throw createErrorFromResponse(400, {
            message: 'Username must be valid.',
            code: 'INVALID_INPUT',
            details: {
                field: 'username',
                received: typeof username
            }
        }, 'verification');
    }
    if (typeof confirmationCode !== 'string' || !confirmationCode.trim()) {
        throw createErrorFromResponse(400, {
            message: 'Code must be valid.',
            code: 'INVALID_INPUT',
            details: {
                field: 'code',
                received: typeof confirmationCode
            }
        }, 'verification');
    }
    if (typeof newPassword !== 'string' || !newPassword.trim()) {
        throw createErrorFromResponse(400, {
            message: 'Password must be valid.',
            code: 'INVALID_INPUT',
            details: {
                field: [
                    'password',
                    'confirmPassword'
                ],
                received: typeof newPassword
            }
        }, 'verification');
    }
    try {
        const response = await fetch('https://api.pixele.gg/users/reset-password/confirm-new-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username,
                confirmationCode,
                newPassword
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return createErrorFromResponse(response.status, data, 'verification');
        }

        return data;
    } catch (error) {
        if (error instanceof VerificationError) {
            throw error;
        }

        if (error.message === 'Failed to fetch') {
            throw createErrorFromResponse(500, {
                message: 'Unable to connect to the server. Please check your internet connection.',
                code: 'NETWORK_ERROR',
                details: {
                    originalError: error.message
                }
            }, 'verification');
        }

        throw createErrorFromResponse(500, {
            message: 'An unknown error occurred',
            code: 'UNKNOWN_ERROR',
            details: {
                originalError: error.message
            }
        }, 'verification')
    }
}