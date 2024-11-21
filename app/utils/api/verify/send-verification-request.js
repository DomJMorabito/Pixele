import { createErrorFromResponse } from '@/app/utils/errors/error-handler';
import { VerificationError } from '@/app/utils/errors/verification/VerificationError';

/**
 * Confirms the sign-up verification code for the user with AWS Cognito.
 *
 * @param {string} username - The username of the user.
 * @param {string} verificationCode - The verification code entered by the user.
 * @returns {Promise<Object>} - A promise that resolves with the result of the confirmation request.
 * @throws {Error} - Throws an error if the confirmation request fails.
 */
export const sendVerificationRequest = async (username, verificationCode) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
        if (error instanceof VerificationError) { // If it's already a VerificationError (from createErrorFromResponse), rethrow it.
            throw error;
        }

        if (!navigator.online || error.message === 'Failed to fetch') { // Handle network errors or other unexpected errors.
            throw createErrorFromResponse(500, {
                message: 'Unable to connect to the server. Please check your internet connection.',
                code: 'NETWORK_ERROR'
            }, 'verification');
        }

        throw createErrorFromResponse(500, { // Handle any other unknown errors.
            message: 'An unknown error occurred',
            code: 'UNKNOWN_ERROR',
        }, 'verification');
    }
};