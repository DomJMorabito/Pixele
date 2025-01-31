// Utils Imports:

import { VerificationError } from '@/app/utils/errors/verification/VerificationError';
import { createErrorFromResponse } from '@/app/utils/errors/error-handler';

/**
 * Resends the verification code for the specified username.
 *
 * @param {string} username - The username of the user to whom the verification code should be resent.
 * @returns {Promise<void>} - A promise that resolves when the verification code is successfully resent.
 * @throws {Error} - Throws an error if the resend request fails.
 */
export const resendVerificationCode = async (username) => {
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
    try {
        const response = await fetch(`https://api.pixele.gg/users/resend-verification-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username
            }),
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