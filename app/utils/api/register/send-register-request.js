// Utils Imports:

import { createErrorFromResponse } from '@/app/utils/errors/error-handler';
import { RegistrationError } from '@/app/utils/errors/register/RegistrationError';

/**
 * Sends a registration request to the server with the provided username, email, and password.
 *
 * @param {string} username - The username entered by the user.
 * @param {string} email - The email entered by the user.
 * @param {string} password - The password entered by the user.
 * @returns {Promise<Object>} - A promise that resolves with the server response data if the request is successful.
 * @throws {Error} - Throws an error if the response is not OK, with a message from the server or a default error message.
 */
export const sendRegisterRequest = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw createErrorFromResponse(response.status, data, 'registration');
        }

        return data;
    } catch (error) {
        if (error instanceof RegistrationError) { // If it's already a RegistrationError (from createErrorFromResponse), rethrow it.
            throw error;
        }

        if (error.message === 'Failed to fetch') { // Handle network errors or other unexpected errors.
            throw createErrorFromResponse(500, {
                message: 'Unable to connect to the server. Please check your internet connection.',
                code: 'NETWORK_ERROR'
            }, 'registration');
        }

        throw createErrorFromResponse(500, { // Handle any other unknown errors.
            message: 'An unknown error occurred.',
            code: 'UNKNOWN_ERROR',
            details: {
                originalError: error.message
            }
        }, 'registration');
    }
}