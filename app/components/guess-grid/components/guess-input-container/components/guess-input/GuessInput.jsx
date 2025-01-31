// CSS Imports:

import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/GuessInput.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/games/Overwatch.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/games/SSB.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/games/Pokémon.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/games/Valorant.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/games/R6.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/games/Minecraft.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/games/ClashRoyale.css';
import '@/app/components/guess-grid/components/guess-input-container/components/guess-input/games/PVZ.css';

const GuessInput = ({ value, onChange, placeholder, disabled, className }) => {
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