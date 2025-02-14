// Utils Imports:

import { createErrorFromResponse } from '@/app/error/error-handler';
import { VerificationError } from '@/app/error/verification/VerificationError';

/**
 * Confirms the sign-up verification code for the user with AWS Cognito.
 *
 * @param {string} username - The username of the user.
 * @param {string} verificationCode - The verification code entered by the user.
 * @returns {Promise<Object>} - A promise that resolves with the result of the verification request.
 * @throws {Error} - Throws an error if the verification request fails.
 */
export const sendVerificationRequest = async (username, verificationCode) => {
    if (typeof username !== 'string'
        || typeof verificationCode !== 'string'
        || !username.trim()
        || !verificationCode.trim()
    ) {
        throw createErrorFromResponse(400, {
            message: 'Username must be valid.',
            code: 'INVALID_INPUT',
            requirements: [
                typeof username !== 'string' && 'username',
                typeof verificationCode !== 'string' && 'code',
            ].filter(Boolean)
        }, 'verification');
    }
    try {
        const response = await fetch(`https://api.pixele.gg/users/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                verificationCode
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
            code: 'UNKNOWN_ERROR',
        }, 'verification');
    }
};