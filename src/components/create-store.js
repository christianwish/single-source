import deepcopy from 'deepcopy';
import dotProp from 'dot-prop';

export const createStore = (initialState = {}, middlewareArray = []) => {
    let theState = deepcopy(initialState);

    return {
        dispatch: (action) => {},
        subscribe: (path = '') => {},
        pauseSubscribtion: (subscribeKey) => {},
        continueSubscribtion: (subscribeKey) => {},
        deleteSubscribtion: (subscribeKey) => {},
        getState: (path = '') => {
            if (
                typeof path !== 'string' ||
                path === ''
            ) {
                return deepcopy(theState);
            }

            const partOfObject = dotProp.get(theState, path);
            return deepcopy(partOfObject);
        },
    };
};
