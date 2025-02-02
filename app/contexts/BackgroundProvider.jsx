// React Imports:

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const BackgroundContext = createContext();

export const backgrounds = {
    homescreen: 'https://assets.pixele.gg/background/default-background.png',
    register: 'https://assets.pixele.gg/background/register-background.png',
    login: 'https://assets.pixele.gg/background/login-background.png',
    overwatch: {
        hover: 'https://assets.pixele.gg/background/overwatch-background.png',
        game: 'https://assets.pixele.gg/background/overwatch-game-background.png'
    },
    ssb: {
        hover: 'https://assets.pixele.gg/background/ssb-background.png',
        game: 'https://assets.pixele.gg/background/ssb-game-background.png'
    },
    pokemon: {
        hover: 'https://assets.pixele.gg/background/pokemon-background.png',
        game: 'https://assets.pixele.gg/background/pokemon-game-background.png'
    },
    valorant: {
        hover: 'https://assets.pixele.gg/background/valorant-background.png',
        game: 'https://assets.pixele.gg/background/valorant-game-background.png'
    },
    r6: {
        hover: 'https://assets.pixele.gg/background/r6-background.png',
        game: 'https://assets.pixele.gg/background/r6-game-background.png'
    },
    minecraft: {
        hover: 'https://assets.pixele.gg/background/minecraft-background.png',
        game: 'https://assets.pixele.gg/background/minecraft-game-background.png'
    },
    clashroyale: {
        hover: 'https://assets.pixele.gg/background/clashroyale-background.png',
        game: 'https://assets.pixele.gg/background/clashroyale-game-background.png'
    },
    pvz: {
        hover: 'https://assets.pixele.gg/background/pvz-background.png',
        game: 'https://assets.pixele.gg/background/pvz-game-background.png'
    }
};

export function BackgroundProvider({ children }) {
    const [currentBackground, setCurrentBackground] = useState(backgrounds.homescreen);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${currentBackground})`;
        return () => {
            document.body.style.backgroundImage = '';
        }
    }, [currentBackground]);

    const setBackground = useCallback((newBackground) => {
        setCurrentBackground(newBackground);
    }, []);

    const resetBackground = useCallback(() => {
        setCurrentBackground(backgrounds.homescreen);
    }, [])

    const value = {
        currentBackground,
        setBackground,
        resetBackground
    };

    return (
        <BackgroundContext.Provider value={value}>
            {children}
        </BackgroundContext.Provider>
    );
}

export function useBackground() {
    const context = useContext(BackgroundContext);
    if (!context) {
        throw new Error('useBackground can only be used within a BackgroundProvider.');
    }
    return context;
}

export default BackgroundProvider;