// React Imports:

import { useState, useEffect } from 'react';

// Component Imports:

import GuessInput from '@/app/components/guess-grid/components/guess-input-container/components/guess-input/GuessInput';
import GuessButton from '@/app/components/guess-grid/components/guess-input-container/components/guess-button/GuessButton';
import AutocompleteDropdown from "@/app/components/guess-grid/components/autocomplete-dropdown/AutocompleteDropdown";

// Utils Imports:

import { submitGuess } from '@/app/api/game/submit-guess';
import { loadCharacterList } from '@/app/utils/game/load-character-list';

// CSS Imports:

import '@/app/components/guess-grid/components/guess-input-container/GuessInputContainer.css';

const GuessInputContainer = ({
    maxGuesses,
    guessCount,
    placeholder,
    disabled,
    className,
    gameId
}) => {
    const [input, setInput] = useState('');
    const [characterList, setCharacterList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const remainingGuesses = maxGuesses - guessCount;

    useEffect(() => {
        const loadCharacters = async () => {
            const characterList = await loadCharacterList(gameId);
            setCharacterList(characterList);
            setIsLoading(false);
        };
        loadCharacters();
    }, [gameId]);

    const handleGuess = async(event) => {
        event.preventDefault();
        await submitGuess(gameId, input);
        setInput('');
    }

    const handleSelect = (characterName) => {
        setInput(characterName)
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
                />
                <GuessButton
                    onClick={handleGuess}
                    disabled={disabled || !input.trim()}
                    remainingGuesses={remainingGuesses}
                    className={`${gameId}-guess-button`}
                />
            </div>
            <AutocompleteDropdown
                inputValue={input}
                characters={characterList}
                onSelect={handleSelect}
                gameId={gameId}
            />
        </div>
    );
}

export default GuessInputContainer;