// React Imports:

import { useEffect } from "react";

// Utils Imports:

import { formatGameId } from "@/app/utils/game/format-game-id";

// CSS Imports:

import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/GuessInput.css';

const GuessInput = ({ value, onChange, placeholder, disabled, className, gameId }) => {

    useEffect(() => {
        if (gameId) {
            import((`@/app/components/guess-grid/components/guess-input-container/components/guess-input/games/${formatGameId(gameId)}.css`));
        }
    }, [gameId]);

    return (
        <input
            type="text"
            id='guess-input'
            className={className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete="off"
        />
    );
}

export default GuessInput;