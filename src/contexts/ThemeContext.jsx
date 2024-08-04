import React, { createContext, useContext, useEffect, useState } from 'react';

// Creating theme context.
const ThemeContext = createContext('light');

// Theme provider.
const ThemeContextProvider = ({ children }) => {

    // Theme state.
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Function to toggle theme.
    const changeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    // Update theme on UI and local storage when theme state change.
    useEffect(() => {
        localStorage.setItem('theme', theme);

        const html = document.querySelector('html');

        theme === "light" ? html.classList.remove('dark') : html.classList.remove('light');

        html.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme context.
const useTheme = () => useContext(ThemeContext);

export { ThemeContextProvider, useTheme };
