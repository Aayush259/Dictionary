
const historyMiddleWare = store => next => action => {
    const result = next(action);

    if (action.type.startsWith('history')) {
        const historyState = store.getState().history.value;

        localStorage.setItem('userDictHistory', JSON.stringify(historyState));
    };

    return result;
};

export default historyMiddleWare;
