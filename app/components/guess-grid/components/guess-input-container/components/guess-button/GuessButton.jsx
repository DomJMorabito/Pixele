// CSS Imports:

import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/GuessButton.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/games/Overwatch.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/games/SSB.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/games/Pokémon.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/games/Valorant.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/games/R6.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/games/Minecraft.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/games/ClashRoyale.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-button/games/PVZ.css';

const GuessButton = ({ onClick, disabled, remainingGuesses, className }) => {
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