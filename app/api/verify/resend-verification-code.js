// Utils Imports:

import { VerificationError } from '@/app/error/verification/VerificationError';
import { createErrorFromResponse } from '@/app/error/error-handler';

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
            requirements: [
                typeof username !== 'string' && 'username'
            ].filter(Boolean)
        }, 'verification');
    }
    try {
        const response = await fetch(`https://api.pixele.gg/users/resend-verification-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username
            }),
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