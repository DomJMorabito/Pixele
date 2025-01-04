// Utils Imports:

import { createErrorFromResponse } from '@/app/utils/errors/error-handler';
import { VerificationError } from '@/app/utils/errors/verification/VerificationError';

/**
 * Confirms the email confirmation code for the user with AWS Cognito.
 *
 * @param {string} email - The email of the user.
 * @param {string} confirmationCode - The confirmation code entered by the user.
 * @returns {Promise<Object>} - A promise that resolves with the result of the confirmation request.
 * @throws {Error} - Throws an error if the confirmation request fails.
 */
export const sendConfirmationRequest = async (email, confirmationCode) => {
    try {
        const response = await fetch(`https://api.pixele.gg/users/confirm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                confirmationCode
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