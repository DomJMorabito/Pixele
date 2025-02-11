// Utils Imports:

import { createErrorFromResponse } from '@/app/utils/errors/error-handler';
import { LoginError } from '@/app/utils/errors/login/LoginError';

/**
 * Sends a login request using AWS Amplify's auth service
 *
 * @param {string} identifier - The username or email entered by the user
 * @param {string} password - The password entered by the user
 * @returns {Promise<Object>} - A promise that resolves with the server response data if the request is successful.
 * @throws {Error} - Throws an error if the response is not OK, with a message from the server or a default error message.
 */
export const sendLoginRequest = async (identifier, password) => {
    if (typeof identifier !== 'string'
        || typeof password !== 'string'
        || !identifier.trim()
        || !password.trim()
    ) {
        throw createErrorFromResponse(400, {
            message: 'Username/email must be valid.',
            code: 'INVALID_INPUT',
            requirements: [
                typeof identifier !== 'string' && 'identifier',
                typeof password !== 'string' && 'password',
            ].filter(Boolean)
        }, 'login');
    }
    try {
        const response = await fetch(`https://api.pixele.gg/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                identifier,
                password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw createErrorFromResponse(response.status, data, 'login');
        }

        return data;
    } catch (error) {
        if (error instanceof LoginError) {
            throw error;
        }

        if (error.message === 'Failed to fetch') {
            throw createErrorFromResponse(500, {
                message: 'Unable to connect to the server. Please check your internet connection.',
                code: 'NETWORK_ERROR'
            }, 'login');
        }

        throw createErrorFromResponse(500, {
            message: 'An unknown error occurred.',
            code: 'UNKNOWN_ERROR'
        }, 'login');
    }
}