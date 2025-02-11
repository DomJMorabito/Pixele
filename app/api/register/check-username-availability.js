// Utils Imports:

import { createErrorFromResponse } from '@/app/utils/errors/error-handler';
import { RegistrationError } from '@/app/utils/errors/register/RegistrationError';

/**
 * Checks if a username is already taken.
 *
 * @param {string} username - The username to check
 * @returns {Promise<boolean>} - Returns true if username is available, false if taken
 * @throws {Error} - Throws an error if the network request fails
 */
export async function checkUsernameAvailability(username) {
    if (typeof username !== 'string' || !username.trim()) {
        throw createErrorFromResponse(400, {
            message: 'Username must be valid.',
            code: 'INVALID_INPUT',
            requirements: [
                typeof username !== 'string' && 'username'
            ].filter(Boolean)
        }, 'registration');
    }
    try {
        const response = await fetch(`https://api.pixele.gg/users/check-username-availability?username=${encodeURIComponent(username.trim())}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw createErrorFromResponse(response.status, data, 'registration');
        }

        const data = await response.json();
        return !data.taken;
    } catch (error) {
        if (error instanceof RegistrationError) {
            throw error;
        }

        if (error.message === 'Failed to fetch') {
            throw createErrorFromResponse(500, {
                message: 'Unable to connect to the server. Please check your internet connection.',
                code: 'NETWORK_ERROR'
            }, 'registration');
        }

        throw createErrorFromResponse(500, {
            message: 'An unknown error occurred.',
            code: 'UNKNOWN_ERROR'
        }, 'registration');
    }
}