import { configureStore } from '@reduxjs/toolkit';
import theme from '../features/themeSlice.js';
import history from '../features/historySlice.js';
import themeMiddleWare from '../middleware/themeMiddleWare.js';
import historyMiddleWare from '../middleware/historyMiddleWare.js';

const store = configureStore({
    reducer: {
        theme,
        history,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([themeMiddleWare, historyMiddleWare]),
});

export default store;
