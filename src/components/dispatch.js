export const dispatch = (currentState, actionObject) => {
    if (typeof currentState === 'undefined') {
        return undefined;
    }

    if (typeof actionObject === 'undefined') {
        return currentState;
    }
};
