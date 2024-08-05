import { nanoid } from '@reduxjs/toolkit';

// Reducer to add word in history.
const addInHistory = (state, action) => {
    const newWord = {
        id: nanoid(),
        date: Date.now(),
        word: action.payload,
    };

    state.value = [...state.value, newWord];
};

// Reducer to remove word from history.
const removeFromHistory = (state, action) => {
    state.value = state.value.filter(word => word.id !== action.payload);
};

// Reducer to clear complete history at once.
const clear = (state, action) => {
    state.value = [];
};

export { addInHistory, removeFromHistory, clear };
