
const themeMiddleWare = store => next => action => {
    // Call reducer.
    const result = next(action);

    if (action.type.startsWith('theme')) {
        // Getting theme state from store.
        const theme = store.getState().theme.value;

        // HTML element.
        const html = document.querySelector('html');

        // Updating theme class of html.
        theme === 'light' ? html.classList.remove('dark') : html.classList.remove('light');
        html.classList.add(theme);

        // Update theme in local storage.
        localStorage.setItem('theme', theme);
    };

    return result;
}

export default themeMiddleWare;
