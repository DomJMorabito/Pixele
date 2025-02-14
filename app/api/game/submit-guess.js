// Utils Imports:

import { createErrorFromResponse, } from "@/app/error/error-handler";
import { GameError } from '@/app/error/game/GameError';

/**
 * Submits a guess for a specific game to the server.
 *
 * @param {string} gameId - The identifier for the game.
 * @param {string} character - The name of the guessed character.
 * @param {string} token - The user's authentication token (optional).
 * @returns {Promise<Object>} - A promise that resolves with the guess result data.
 * @throws {Error} - Throws an error if the request fails or if inputs are invalid.
 */
export const submitGuess = async (gameId, character, token = null) => {
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

    if (typeof character !== 'string' || !character.trim()) {
        throw createErrorFromResponse(400, {
            message: 'Character ID must be valid.',
            code: 'INVALID_INPUT',
            details: {
                field: 'characterId',
                received: typeof character
            }
        }, 'game');
    }

    try {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`https://api.pixele.gg/games/${gameId}/submit-guess`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                character: character
            })
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