// Utils Imports:

import { createErrorFromResponse } from '@/app/utils/errors/error-handler';
import { AuthError } from '@/app/utils/errors/auth/AuthError';

/**
 * Sends a request to check the authentication status of the current user
 *
 * @returns {Promise<Object>} - A promise that resolves with the user's auth status and info
 * @throws {Error} - Throws an error if the response is not OK or if there's a network error
 */
export const checkAuth = async () => {
    try {
        const response = await fetch('https://api.pixele.gg/users/check-auth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        const data = await response.json();

        if (!response.ok) {
            throw createErrorFromResponse(response.status, data, 'auth');
        }

        return data;
    } catch (error) {
        if (error instanceof AuthError) {
            throw error;
        }

        if (error.message === 'Failed to fetch') {
            throw createErrorFromResponse(500, {
                message: 'Unable to connect to the server. Please check your internet connection.',
                code: 'NETWORK_ERROR'
            }, 'auth');
        }

        throw createErrorFromResponse(500, {
            message: 'An unknown error occurred.',
            code: 'UNKNOWN_ERROR',
            details: {
                originalError: error.message
            }
        }, 'auth');
    }
}