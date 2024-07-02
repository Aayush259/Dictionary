import React, { createContext, useContext } from 'react';

// Create a context
const WordDataContext = createContext();

// Provider component
const WordDataContextProvider = ({ children, value }) => {
    return (
        <WordDataContext.Provider value={value}>
            {children}
        </WordDataContext.Provider>
    );
};

const useWordDataContext = () => {
    return useContext(WordDataContext);
};

export { WordDataContext, WordDataContextProvider, useWordDataContext };