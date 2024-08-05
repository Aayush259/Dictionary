import { configureStore } from '@reduxjs/toolkit';
import theme from '../features/themeSlice.js';
import history from '../features/historySlice.js';
import themeMiddleWare from '../middleware/themeMiddleWare.js';

const store = configureStore({
    reducer: {
        theme,
        history,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([themeMiddleWare]),
});

export default store;
