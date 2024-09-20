// Component Imports:

import NavBar from "./components/navbar/NavBar";

// CSS Imports:

import './layout.css';

export default function Layout({ children }) {
    return (
        <html lang = "en">
            <head>
                <meta charSet = "UTF-8" />
                <meta name = "viewport" content = "width=device-width, initial-scale=1.0, user-scalable=no" />
                <link rel = "icon" type = "image/png" sizes = "32x32" href = "/header/favicon.png" />
                <title>Pixele</title>
            </head>
            <body>
                <NavBar />
                { children }
            </body>
        </html>
    );
}