// Next.js Imports:

import Image from 'next/image';

// React Imports:

import { useEffect, useMemo } from 'react';

// Utils Imports:

import { formatCharacterDetails, getCharacterImageSrc, getSpecialInfo } from '@/app/utils/game/game-config';
import { formatGameId } from "@/app/utils/game/format-game-id";
import { getContainerClassName } from "@/app/utils/ui/get-container-class-name";
import { isSpecialLocation } from "@/app/utils/ui/is-special-location";

// CSS Imports:

import '@/app/components/guess-grid/components/autocomplete-dropdown/AutocompleteDropdown.css';

const SpecialInfoItem = ({ item, value, gameId }) => {
    if (!value && item.optional) return null;

    switch (item.type) {
        case 'icon':
            if ((item.field === 'country' || item.field === 'origin') && isSpecialLocation(value)) {
                return (
                    <div className={`${gameId}-special-info-item ${gameId}-special-location-text special-info-item`}>
                        {value}
                    </div>
                )
            }
            const containerClassName = getContainerClassName(item.field, value);

            return (
                <div className={`${gameId}-special-info-item special-info-icon-container ${containerClassName}`}>
                    <Image
                        src={item.imgPath(value, gameId)}
                        alt=''
                        fill
                        sizes="60px"
                    />
                </div>
            )
        case 'text':
            const className = typeof item.className === 'function'
                ? item.className(value)
                : item.className
            return (
                <div className={`${gameId}-special-info-item ${className} special-info-item`}>
                    {value}
                </div>
            )
        default:
            return null;
    }
}

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

    const renderSpecialInfo = (character) => {
        const config = getSpecialInfo(gameId);

        if (gameId === 'pokemon') {
            return (
                <div className={`character-header-info ${gameId}-layout`}>
                    <div className={`${gameId}-special-info-item pokedex-number`}>
                        {character.pokedexNumber}
                    </div>
                    <div className={`${gameId}-character-name character-name`}>
                        {character.name}
                    </div>
                    <div className="pokemon-types">
                        <div className={`pokemon-type-${character.type1} pokemon-type`}>
                            {character.type1}
                        </div>
                    </div>
                    {character.type2 && (
                        <div className={`pokemon-type-${character.type2} pokemon-type`}>
                            {character.type2}
                        </div>
                    )}
                </div>
            );
        }

        const hasFlag = config.items.some(item => item.field === 'country' || item.field === 'origin');
        const mainItem = config.items.find(item =>
            ['role', 'series', 'side', 'realm', 'elixir'].includes(item.field)
        );
        const flagItem = config.items.find(item =>
            ['country', 'origin'].includes(item.field)
        );
        const { name, details } = formatCharacterDetails(character, gameId);

        return (
            <div className={`character-header-info ${gameId}-layout`}>
                {hasFlag && flagItem && (
                    <div className="flag-row">
                        <SpecialInfoItem
                            item={flagItem}
                            value={character[flagItem.field]}
                            gameId={gameId}
                        />
                    </div>
                )}
                <div>
                    <div className='name-main-item-row'>
                        <SpecialInfoItem
                            item={mainItem}
                            value={character[mainItem.field]}
                            gameId={gameId}
                        />
                        <p className={`${gameId}-character-name character-name`}>
                            {name}
                        </p>
                    </div>
                </div>
                <div className="character-details">
                    <span className={`${gameId}-sub-details`}>{details}</span>
                </div>
            </div>
        )
    }

    if (!inputValue.trim() || filteredCharacters.length === 0) {
        return null;
    }

    return (
        <div id="autocomplete-dropdown" className={`${gameId}-autocomplete-dropdown`}>
            <div id="autocomplete-scroll-container" className={`${gameId}-autocomplete-scroll-container`}>
                {filteredCharacters.map((character) => {
                    const imageSrc = getCharacterImageSrc(character, gameId);

                    return (
                        <div
                            key={character.name}
                            className={`${gameId}-autocomplete-dropdown-item autocomplete-dropdown-item`}
                            onClick={() => onSelect(character.name)}
                        >
                            <div className="character-top-section">
                                <div className={`character-image ${gameId}-character-image`}>
                                    <Image
                                        src={imageSrc}
                                        alt=""
                                        fill
                                        sizes="
                                            (min-width: 3840px) 125px,
                                            (min-width: 2560px) 100px,
                                            (min-width: 1920px) 85px,
                                            (min-width: 1440px) 75px,
                                            (min-width: 1024px) 85px,
                                            (min-width: 768) 75px,
                                            (min-width: 425px) 60px,
                                            (min-width: 375px) 50px,
                                            45px"
                                    />
                                </div>
                                {renderSpecialInfo(character)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default AutocompleteDropdown;