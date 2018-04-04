import { deepCopy, deepEqual } from './deep';
import { extendStateObj } from './extend-state-obj';
import { dotPropGet } from './dot-prop';
import { filterSubscriptions } from './filter-subscriptions';
import { unsubscribe } from './unsubscribe';

export const createStore = (initialState = {}) => {
    const privates = {
        state: deepCopy(initialState),
        subscriptionCollection: [],
    };

    const getState = (path = '') => {
        if (typeof path !== 'string' || path === '') {
            return deepCopy(privates.state);
        }

        const partOfObject = dotPropGet(privates.state, path);
        const typeofPart = typeof partOfObject;

        return (typeofPart === 'object')
            ? deepCopy(partOfObject)
            : (typeofPart !== 'undefined')
            ? partOfObject
            : undefined;
    };

    const dispatch = (actionObj) => {
        const lastState = deepCopy(privates.state);
        const newState = extendStateObj(privates.state, actionObj);

        if (deepEqual(lastState, newState)) {
            return undefined;
        }

        privates.state = newState;

        const filteredActionObjs = filterSubscriptions(
            privates.subscriptionCollection,
            lastState,
            newState,
        );

        if (filteredActionObjs.length === 0) {
            return undefined;
        }

        filteredActionObjs.forEach((action) => {
            const changedData = dotPropGet(privates.state, action.path);
            action.callback(changedData);
        });

        return undefined;
    };

    const subscribe = (path = '', callback) => {
        const now = Date.now();
        privates.subscriptionCollection.push({ path, callback, id: now });
        return { id: now };
    };

    const unsubscribeMethod = (subscriptionObj) => {
        privates.subscriptionCollection = unsubscribe(
            privates.subscriptionCollection,
            subscriptionObj,
        );

        return undefined;
    };

    return {
        dispatch,
        subscribe,
        unsubscribe: unsubscribeMethod,
        getState,
    };
};
