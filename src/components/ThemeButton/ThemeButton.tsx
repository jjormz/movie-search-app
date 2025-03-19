import React, { useState, useEffect } from "react";
import styles from "./ThemeButton.module.css";

const ThemeButton: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const htmlElement = document.documentElement;
        if (isDarkTheme) {
            htmlElement.setAttribute("data-theme", "dark");
        } else {
            htmlElement.setAttribute("data-theme", "light");
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div>
            <button className={styles.theme__button} onClick={toggleTheme}>
                {isDarkTheme ? "Light Theme" : "Dark Theme"}
            </button>
        </div>
    );
};

export default ThemeButton;
