// Component Imports:
import NavBar from './components/navbar/NavBar';

// CSS Imports:
import './layout.css';

export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
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
            <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
                as="style"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
            />
            <title>Pixele</title>
        </head>
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    );
}