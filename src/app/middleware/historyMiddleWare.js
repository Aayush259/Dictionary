
const historyMiddleWare = store => next => action => {
    // Call reducer.
    const result = next(action);

    if (action.type.startsWith('history')) {
        // Getting history state from store.
        const historyState = store.getState().history.value;

        // Updating history in local storage.
        localStorage.setItem('userDictHistory', JSON.stringify(historyState));
    };

    return result;
};

export default historyMiddleWare;
