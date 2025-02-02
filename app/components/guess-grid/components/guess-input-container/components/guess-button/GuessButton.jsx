// React Imports:

import { useEffect } from "react";

// Utils Imports:

import { formatGameId } from "@/app/utils/game/format-game-id";

// CSS Imports:

import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/GuessButton.css';

const GuessButton = ({ onClick, disabled, remainingGuesses, className, gameId }) => {

    useEffect(() => {
        if (gameId) {
            import((`@/app/components/guess-grid/components/guess-input-container/components/guess-button/games/${formatGameId(gameId)}.css`));
        }
    }, [gameId]);

    return (
        <button
            type="button"
            id="guess-button"
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            Submit ({remainingGuesses} left!)
        </button>
    );
}

export default GuessButton;