import { createSlice } from '@reduxjs/toolkit';
import { addInHistory, clear, removeFromHistory } from '../reducers/historyReducers.js';

const initialState = {
    value: JSON.parse(localStorage.getItem('userHistory')) || [],
};

// Creating user's history slice.
const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addWordInHistory: addInHistory,
        removeWordFromHistory: removeFromHistory,
        clearHistory: clear,
    },
});

export const {addWordInHistory, removeWordFromHistory, clearHistory} = historySlice.actions;

export default historySlice.reducer;
