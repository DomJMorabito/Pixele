// Utils Imports:

import { VerificationError } from '@/app/utils/errors/verification/VerificationError';
import { createErrorFromResponse } from '@/app/utils/errors/error-handler';

/**
 * Sends a reset password email request to the server
 *
 * @param {string} email - The email address to send the reset password link to
 * @returns {Promise<Object>} - A promise that resolves with the server response data if successful
 * @throws {Error} - Throws an error if the request fails
 */
export const sendResetPasswordEmail = async (email) => {
    try {
        const response = await fetch('https://api.pixele.gg/users/reset-password/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email,
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