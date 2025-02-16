// React Imports:

import { useEffect, useState } from 'react';

// Context Imports:

import { useAuth } from "@/app/contexts/AuthProvider";
import { useAlert } from "@/app/contexts/AlertProvider";

// Component Imports:

import Attributes from '@/app/components/guess-grid/components/attributes/Attributes';
import Picture from '@/app/components/guess-grid/components/picture/Picture';
import Circle from '@/app/components/guess-grid/components/circle/Circle';
import AttributeIndicatorContainer from '@/app/components/guess-grid/components/attribute-indicator-container/AttributeIndicatorContainer';
import GuessInputContainer from '@/app/components/guess-grid/components/guess-input-container/GuessInputContainer';
import AutocompleteDropdown from "@/app/components/guess-grid/components/autocomplete-dropdown/AutocompleteDropdown";

// Utils Imports:

import { fetchGuesses } from '@/app/api/game/fetch-guesses';
import { loadCharacterList } from "@/app/utils/game/load-character-list";

// CSS Imports:

import '@/app/components/guess-grid/GuessGrid.css';

const GuessGrid = ({ gameId, attributes, maxGuesses, inputPlaceholder }) => {
    const [guesses, setGuesses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [characterList, setCharacterList] = useState([]);
    const { isAuthenticated, userInfo } = useAuth();
    const { showAlert } = useAlert();

    // Load character list:
    useEffect(() => {
        const loadCharacters = async () => {
            const characterList = await loadCharacterList(gameId);
            setCharacterList(characterList);
            setLoading(false);
        };
        loadCharacters();
    }, [gameId]);

    // Handle selection of a character in list:
    const handleSelect = (characterName) => {
        setInput(characterName)
    }

    // Fetch user's guesses:
    useEffect(() => {
        const loadGameData = async() => {
            try {
                setLoading(true);
                if (isAuthenticated && userInfo?.token) {
                    const guessesData = await fetchGuesses(gameId, userInfo.token);
                    setGuesses(guessesData.guesses || []);
                } else {
                    const localStorageKey = `${gameId}-guesses`;
                    const savedGuesses = localStorage.getItem(localStorageKey);
                    if (savedGuesses) {
                        setGuesses(JSON.parse(savedGuesses));
                    }
                }
            } catch (error) {
                showAlert('Failed to load game data.', 'bad');
            } finally {
                setLoading(false);
            }
        };
        loadGameData();
    }, [gameId, isAuthenticated, userInfo, showAlert]);

    const numRowsToShow = Math.min(guesses.length + 1, maxGuesses);

    return (
        <>
            <div id="guess-grid" className={`${gameId}-guess-grid`}>
                <Attributes
                    attributes={attributes}
                    className={`${gameId}-attributes`}
                    gameId={gameId}
                />
                {Array.from({ length: numRowsToShow }).map((_, rowIndex) => {
                    const guess = guesses[rowIndex];
                    return (
                        <div
                            key={`guess-${rowIndex}`}
                            className="guess-row"
                            id={`guess-${rowIndex + 1}`}
                        >
                            <Picture
                                rowIndex={rowIndex}
                                className={`${gameId}-picture`}
                                picture={guess?.picture}
                                gameId={gameId}
                            />
                            {Array.from({ length: 5 }).map((_, circleIndex) => (
                                <Circle
                                    key={`circle-${rowIndex}-${circleIndex}`}
                                    className={`${gameId}-circle`}
                                    rowIndex={rowIndex}
                                    circleIndex={circleIndex}
                                    result={guess?.results?.[circleIndex]}
                                    gameId={gameId}
                                />
                            ))}
                        </div>
                    );
                })}
                <AttributeIndicatorContainer
                    guesses={guesses}
                    gameId={gameId}
                    className={`${gameId}-attribute-indicator-container`}
                />
                <GuessInputContainer
                    maxGuesses={maxGuesses}
                    guessCount={guesses.length}
                    placeholder={inputPlaceholder}
                    disabled={loading || guesses.length >= maxGuesses}
                    className={`${gameId}-guess-input-container`}
                    gameId={gameId}
                    input={input}
                    setInput={setInput}
                />
                <AutocompleteDropdown
                    inputValue={input}
                    characters={characterList}
                    onSelect={handleSelect}
                    gameId={gameId}
                />
            </div>
        </>
    );
};

export default GuessGrid;