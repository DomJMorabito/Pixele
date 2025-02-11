// Utils Imports:

import { createErrorFromResponse } from '@/app/utils/errors/error-handler';
import { VerificationError } from '@/app/utils/errors/verification/VerificationError';

/**
 * Confirms the sign-up verification code for the user with AWS Cognito.
 *
 * @param {string} username - The username of the user.
 * @param {string} verificationCode - The verification code entered by the user.
 * @returns {Promise<Object>} - A promise that resolves with the result of the verification request.
 * @throws {Error} - Throws an error if the verification request fails.
 */
export const sendVerificationRequest = async (username, verificationCode) => {
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
    if (typeof verificationCode !== 'string' || !verificationCode.trim()) {
        throw createErrorFromResponse(400, {
            message: 'Code must be valid.',
            code: 'INVALID_INPUT',
            details: {
                field: 'code',
                received: typeof verificationCode
            }
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