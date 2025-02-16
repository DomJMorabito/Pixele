// Component Imports:

import GuessInput from '@/app/components/guess-grid/components/guess-input-container/components/guess-input/GuessInput';
import GuessButton from '@/app/components/guess-grid/components/guess-input-container/components/guess-button/GuessButton';

// Utils Imports:

import { submitGuess } from '@/app/api/game/submit-guess';

// CSS Imports:

import '@/app/components/guess-grid/components/guess-input-container/GuessInputContainer.css';

const GuessInputContainer = ({
    maxGuesses,
    guessCount,
    placeholder,
    disabled,
    className,
    gameId,
    input,
    setInput,
}) => {
    const remainingGuesses = maxGuesses - guessCount;

    const handleGuess = async(event) => {
        event.preventDefault();
        await submitGuess(gameId, input);
        setInput('');
    }

    return (
        <div id='guess-input-container' className={className}>
            <div id='input-button-group'>
                <GuessInput
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`${gameId}-guess-input`}
                    gameId={gameId}
                />
                <GuessButton
                    onClick={handleGuess}
                    disabled={disabled || !input.trim()}
                    remainingGuesses={remainingGuesses}
                    className={`${gameId}-guess-button`}
                    gameId={gameId}
                />
            </div>
        </div>
    );
}

export default GuessInputContainer;