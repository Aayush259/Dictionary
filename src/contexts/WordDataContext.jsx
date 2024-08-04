import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

// Create a context
const WordDataContext = createContext();

// Provider component
const WordDataContextProvider = ({ children }) => {

    // State for userData.
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userHistory')) || []);

    // Update userData in local storage when it changes.
    useEffect(() => {
        localStorage.setItem('userHistory', JSON.stringify(userData));
    }, [userData]);

    // Function to add word in user history.
    const addWordInHistory = useCallback((word) => {
        // Creating new object for the word.
        const newObject = {
            id: Date.now(),
            word: word,
        };

        setUserData(prevData => [...prevData, newObject]);
    }, [setUserData]);

    // Function to remove word from user history.
    const removeWordFromHistory = useCallback((id) => {
        setUserData(prevData => prevData.filter(data => data.id !== id));
    }, [setUserData]);

    // Function to clear user history.
    const clearHistory = () => setUserData([]);

    return (
        <WordDataContext.Provider value={{ userData, addWordInHistory, removeWordFromHistory, clearHistory }}>
            {children}
        </WordDataContext.Provider>
    );
};

// Custom hook to use word data context.
const useWordDataContext = () => {
    return useContext(WordDataContext);
};

export { WordDataContext, WordDataContextProvider, useWordDataContext };
