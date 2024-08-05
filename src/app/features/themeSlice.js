import { createSlice } from '@reduxjs/toolkit';

// Initial state for theme.
const initialState = {
    value: localStorage.getItem('theme') || 'light',
};

// Creating theme slice.
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
