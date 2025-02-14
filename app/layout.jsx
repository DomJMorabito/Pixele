// Component Imports:

import LayoutContent from '@/app/components/layout/LayoutContent';

// CSS Imports:

import '@/app/layout.css'

export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <meta name="description"
                  content="Pixele is a daily gaming puzzle where players guess mystery video game characters. Like Wordle but for gamers - challenge yourself with a new character each day from popular games like Overwatch, Pokémon, Valorant, and more!"
            />
            <meta property="og:title" content="Pixele - Daily Video Game Character Guessing Game"/>
            <meta property="og:description"
                  content="Can you guess today's mystery video game character? A daily puzzle game for gaming enthusiasts."/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://pixele.gg"/>
            <meta property="og:image" content="https://assets.pixele.gg/favicon/pixele-logo-192.png"/>
            <meta property="og:site_name" content="Pixele"/>

            <meta name="twitter:description"
                  content="Can you guess today's mystery video game character? A daily puzzle game for gaming enthusiasts."/>
            <meta name="twitter:image" content="https://assets.pixele.gg/favicon/pixele-logo-192.png"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content="Pixele - Daily Video Game Character Guessing Game"/>

            <meta name="keywords"
                  content="wordle, gaming, video games, daily puzzle, character guessing, gaming puzzle, squirdle, new york times, nyt games, connections, the mini, strands"/>
            <meta name="keywords" content="activision, blizzard, nintendo, riot games, ubisoft, supercell, mojang"/>
            <meta name="keywords" content="Overwatch, Overwatch 2, OW, OW2"/>
            <meta name="keywords"
                  content="SSB64, SSB 64, Super Smash Bros. 64, Super Smash Bros 64, Super Smash Brothers 64"/>
            <meta name="keywords"
                  content="SSB Melee, Super Smash Bros. Melee, Super Smash Bros Melee, Super Smash Brothers Melee"/>
            <meta name="keywords"
                  content="SSB Brawl, Super Smash Bros. Brawl, Super Smash Bros Brawl, Super Smash Brothers Brawl"/>
            <meta name="keywords"
                  content="SSBU, SSB Ultimate, Super Smash Bros. Ultimate, Super Smash Bros Ultimate, Super Smash Brothers Ultimate"/>
            <meta name="keywords" content="Pokemon, Pokémon"/>
            <meta name="keywords" content="Valorant"/>
            <meta name="keywords"
                  content="Tom Clancy, Tom Clancy's R6, Tom Clancy R6, Tom Clancy's Rainbow Six Siege, Tom Clancy Rainbow Six Siege, Rainbow Six, Six Siege, R6, Rainbow Six Siege"/>
            <meta name="keywords" content="Minecraft, Mine Craft, MC"/>
            <meta name="keywords" content="Clash Royale, Clash of Clans, COC, CR"/>

            <link rel="icon" type="image/png" sizes="16x16" href="https://assets.pixele.gg/favicon/pixele-logo-16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="https://assets.pixele.gg/favicon/pixele-logo-32.png"/>
            <link rel="icon" type="image/png" sizes="48x48" href="https://assets.pixele.gg/favicon/pixele-logo-48.png"/>
            <link rel="icon" type="image/png" sizes="64x64" href="https://assets.pixele.gg/favicon/pixele-logo-64.png"/>

            <link rel="apple-touch-icon" sizes="120x120" href="https://assets.pixele.gg/favicon/pixele-logo-120.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="https://assets.pixele.gg/favicon/pixele-logo-152.png"/>
            <link rel="apple-touch-icon" sizes="167x167" href="https://assets.pixele.gg/favicon/pixele-logo-167.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="https://assets.pixele.gg/favicon/pixele-logo-180.png"/>

            <link rel="icon" type="image/png" sizes="192x192"
                  href="https://assets.pixele.gg/favicon/pixele-logo-192.png"/>

            <link
                rel="preconnect"
                href="https://fonts.googleapis.com"
            />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
                as="style"
            />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
            />
            <title>Pixele - Daily Video Game Character Guessing Game</title>
        </head>
        <body>
            <LayoutContent>
                {children}
            </LayoutContent>
        </body>
        </html>
    );
}