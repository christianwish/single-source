import { deepEqual } from './deep';
import { dotPropGet } from './dot-prop';

export const filterSubscriptions = (subscriptionsArray, oldState, newState) => {
    if (
        !Array.isArray(subscriptionsArray) ||
        subscriptionsArray.length <= 0 ||
        typeof oldState !== 'object' ||
        typeof newState !== 'object' ||
        deepEqual(oldState, newState)
    ) {
        return [];
    }

    return subscriptionsArray.filter((subscription) => {
        const { path } = subscription;

        const oldStateFromPath = dotPropGet(oldState, path);
        const newStateFromPath = dotPropGet(newState, path);

        return !deepEqual(oldStateFromPath, newStateFromPath);
    });
};
