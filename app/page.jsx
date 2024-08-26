// Component Imports:

import GameCardGrid from "./components/gamecardgrid/GameCardGrid";
import Footer from "./components/footer/Footer";

// CSS Imports:

import styles from './HomeScreen.module.css';

export default function HomeScreen() {
    return (
        <>
            <main className = { styles.main }>
                <GameCardGrid />
            </main>
            <Footer />
        </>
    );
}