import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../features/themeSlice.js';
import historySlice from '../features/historySlice.js';

const store = configureStore({
    reducer: {
        themeSlice,
        historySlice,
    },
});

export default store;
