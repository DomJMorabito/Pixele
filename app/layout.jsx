// Component Imports:

import LayoutContent from '@/app/components/layout/LayoutContent';

// CSS Imports:

import '@/app/layout.css'

export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="https://assets.pixele.gg/general/pixele-logo.png"
            />
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
            <title>Pixele</title>
        </head>
            <body>
                <LayoutContent>
                    {children}
                </LayoutContent>
            </body>
        </html>
    );
}