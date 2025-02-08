// Utils Imports:

import { createErrorFromResponse, } from "@/app/utils/errors/error-handler";
import { GameError } from '@/app/utils/errors/game/GameError';

/**
 * Fetches the user's guesses for a specific game from the server.
 *
 * @param {string} gameId - The identifier for the game.
 * @param {string} token - The user's authentication token (optional).
 * @returns {Promise<Object>} - A promise that resolves with the user's guesses data.
 * @throws {Error} - Throws an error if the request fails or if inputs are invalid.
 */
export const fetchGuesses = async (gameId, token = null) => {
    if (typeof gameId !== 'string' || !gameId.trim()) {
        throw createErrorFromResponse(400, {
            message: 'Game ID must be valid.',
            code: 'INVALID_INPUT',
            details: {
                field: 'gameId',
                received: typeof gameId
            }
        }, 'game');
    }

    try {
        const headers = {
            'Accept': 'application/json'
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`https://api.pixele.gg/games/${gameId}/guesses`, {
            method: 'GET',
            headers
        });

        const data = await response.json();

        if (!response.ok) {
            throw createErrorFromResponse(response.status, data, 'game');
        }

        return data;
    } catch (error) {
        if (error instanceof GameError) {
            throw error;
        }

        if (error.message === 'Failed to fetch') {
            throw createErrorFromResponse(500, {
                message: 'Unable to connect to the server. Please check your internet connection.',
                code: 'NETWORK_ERROR'
            }, 'game');
        }

        throw createErrorFromResponse(500, {
            message: 'An unknown error occurred.',
            code: 'UNKNOWN_ERROR',
            details: {
                originalError: error.message
            }
        }, 'game');
    }
}