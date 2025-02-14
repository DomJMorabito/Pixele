// Utils Imports:

import { createErrorFromResponse } from '@/app/error/error-handler';
import { GameError } from '@/app/error/game/GameError';

/**
 * Fetches the game configuration from the server for a specific game.
 *
 * @param {string} gameId - The identifier for the game (e.g., 'pokémon', 'valorant').
 * @returns {Promise<Object>} - A promise that resolves with the game configuration data.
 * @throws {Error} - Throws an error if the request fails or if gameId is invalid.
 */
export const fetchConfig = async (gameId) => {
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
        const response = await fetch(`https://api.pixele.gg/games/${gameId}/config`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
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
            }, 'registration');
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