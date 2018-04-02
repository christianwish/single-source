import { deepCopy, deepEqual } from './deep';
import { extendStateObj } from './extend-state-obj';
import { dotPropGet } from './dot-prop';
import { filterSubscriptions } from './filter-subscriptions';

export const createStore = (initialState = {}) => {
    // TODO: validate initialState for only serializable data

    const store = { state: deepCopy(initialState) };
    const subscribeCollection = [];

    const getState = (path = '') => {
        if (typeof path !== 'string' || path === '') {
            return deepCopy(store.state);
        }

        const partOfObject = dotPropGet(store.state, path);
        const typeofPart = typeof partOfObject;

        return (typeofPart === 'object')
            ? deepCopy(partOfObject)
            : (typeofPart !== 'undefined')
            ? partOfObject
            : undefined;
    };

    return {
        dispatch: (actionObj) => {
            const lastState = deepCopy(store.state);
            const newState = extendStateObj(store.state, actionObj);

            if (deepEqual(lastState, newState)) {
                return undefined;
            }

            store.state = newState;

            const filteredActionObjs = filterSubscriptions(subscribeCollection, lastState, newState);

            if (filteredActionObjs.length === 0) {
                return undefined;
            }

            filteredActionObjs.forEach((action) => {
                const changedData = dotPropGet(store.state, action.path);
                action.callback(changedData);
            });

            return undefined;
        },
        subscribe: (path = '', callback) => subscribeCollection.push({ path, callback }),
        getState,
        // TODO: connectReactComponent: (React, storeMapping) => (component) => {},
    };
};
