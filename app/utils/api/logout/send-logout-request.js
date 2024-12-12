import { LogoutError } from '@/app/utils/errors/logout/LogoutError';
import { createErrorFromResponse } from '@/app/utils/errors/error-handler';

/**
 * Sends a logout request to the server
 *
 * @returns {Promise<Object>} - A promise that resolves when logout is successful
 * @throws {Error} - Throws an error if the logout request fails
 */
export const sendLogoutRequest = async () => {
    try {
        const response = await fetch('https://api.pixele.gg/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        });

        const data = await response.json();

        if (!response.ok) {
            throw createErrorFromResponse(response.status, data, 'logout');
        }

        return data;
    } catch (error) {
        if (error instanceof LogoutError) {
            throw error;
        }

        if (error.message === 'Failed to fetch') {
            throw createErrorFromResponse(500, {
                message: 'Unable to connect to the server. Please check your internet connection.',
                code: 'NETWORK_ERROR'
            }, 'logout');
        }

        throw createErrorFromResponse(500, {
            message: 'An unknown error occurred during logout.',
            code: 'UNKNOWN_ERROR',
            details: {
                originalError: error.message
            }
        }, 'logout');
    }
};