import styles from './styles.module.scss'
import React, {useEffect, useState} from "react";

const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState('light');
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    const setTheme = () => {
        setActiveTheme(inactiveTheme)
    }

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme]);

    return (
        <div className={styles.toggleButtons} onClick={setTheme}>
            <div className={styles.toggleButton}
                 style={{transform: activeTheme === "dark"
                         ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
                         : "none"}}></div>
            <span className={styles.icon}>🌙</span>
            <span className={styles.icon}>☀️</span>
        </div>
    );
};

export default ThemeToggle;