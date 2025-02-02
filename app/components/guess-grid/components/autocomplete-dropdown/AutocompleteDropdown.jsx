// Next.js Imports:

import Image from 'next/image';

// React Imports:

import { useEffect, useMemo } from 'react';

// Utils Imports:

import { formatCharacterDetails, getCharacterImageSrc } from '@/app/utils/game/game-config';
import { formatGameId } from "@/app/utils/game/format-game-id";

// CSS Imports:

import '@/app/components/guess-grid/components/autocomplete-dropdown/AutocompleteDropdown.css';

const AutocompleteDropdown = ({ inputValue, characters, onSelect, gameId }) => {

    useEffect(() => {
        if (gameId) {
            import((`@/app/components/guess-grid/components/autocomplete-dropdown/games/${formatGameId(gameId)}.css`));
        }
    }, [gameId]);

    const filteredCharacters = useMemo(() => {
        if (!inputValue.trim()) return [];
        const searchTerm = inputValue.toLowerCase();
        return characters.filter(character => {
            if (character.name.toLowerCase().startsWith(searchTerm)) return true;
            return !!character.aliases?.some(alias =>
                alias.toLowerCase().startsWith(searchTerm)
            );
        });
    }, [inputValue, characters]);

    if (!inputValue.trim() || filteredCharacters.length === 0) {
        return null;
    }

    return (
        <div id="autocomplete-dropdown" className={`${gameId}-autocomplete-dropdown`}>
            {filteredCharacters.map((character) => {
                const { mainLine, details } = formatCharacterDetails(character, gameId);
                const imageSrc = getCharacterImageSrc(character, gameId);

                return (
                    <div
                        key={character.name}
                        className={`${gameId}-autocomplete-dropdown-item`}
                        onClick={() => onSelect(character.name)}
                    >
                        <div className={`${gameId}-autocomplete-content`}>
                            <div className={`${gameId}-character-image`}>
                                <Image
                                    src={imageSrc}
                                    alt=""
                                    height={150}
                                    width={150}
                                />
                            </div>
                            <div className={`${gameId}-character-info`}>
                                <div className={`${gameId}-character-details`}>
                                    <span className={`${gameId}-main-line`}>{mainLine}</span>
                                    <span className={`${gameId}-sub-details`}>{details}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default AutocompleteDropdown;