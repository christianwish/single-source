import { deepcopy } from './deepcopy';
import { extendStateObj } from './extend-state-obj';
import dotProp from 'dot-prop';

export const createStore = (initialState = {}) => {
    const store = { state: deepcopy(initialState) };
    const subscribeCollection = [];

    return {
        dispatch: (actionObj) => {
            store.state = extendStateObj(store.state, actionObj);
        },
        subscribe: (path = '', callback) => subscribeCollection.push({ path, callback }),
        getState: (path = '') => {
            if (typeof path !== 'string' || path === '') {
                return deepcopy(store.state);
            }

            const partOfObject = dotProp.get(store.state, path);
            const typeofPart = typeof partOfObject;

            return (typeofPart === 'object')
                ? deepcopy(partOfObject)
                : (typeofPart !== 'undefined')
                ? partOfObject
                : undefined;
        },
    };
};
