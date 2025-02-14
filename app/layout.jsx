// Component Imports:

import LayoutContent from '@/app/components/layout/LayoutContent';

// CSS Imports:

import '@/app/layout.css'

export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

            <link rel="icon" type="image/png" sizes="16x16" href="https://assets.pixele.gg/favicon/pixele-logo-16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="https://assets.pixele.gg/favicon/pixele-logo-32.png"/>
            <link rel="icon" type="image/png" sizes="48x48" href="https://assets.pixele.gg/favicon/pixele-logo-48.png"/>
            <link rel="icon" type="image/png" sizes="64x64" href="https://assets.pixele.gg/favicon/pixele-logo-64.png"/>

            <link rel="apple-touch-icon" sizes="120x120" href="https://assets.pixele.gg/favicon/pixele-logo-120.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="https://assets.pixele.gg/favicon/pixele-logo-152.png"/>
            <link rel="apple-touch-icon" sizes="167x167" href="https://assets.pixele.gg/favicon/pixele-logo-167.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="https://assets.pixele.gg/favicon/pixele-logo-180.png"/>

            <link rel="icon" type="image/png" sizes="192x192" href="https://assets.pixele.gg/favicon/pixele-logo-192.png"/>

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