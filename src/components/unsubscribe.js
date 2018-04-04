import { deepCopy } from './deep';

export const unsubscribe = (subscriptionCollection, subscriptionObj) => {
    if (
        !Array.isArray(subscriptionCollection) ||
        subscriptionCollection.length === 0
    ) {
        return [];
    }

    if (
        typeof subscriptionObj !== 'object' ||
        typeof subscriptionObj.id !== 'number'
    ) {
        return deepCopy(subscriptionCollection);
    }

    return subscriptionCollection.filter(({ id }) => (id !== subscriptionObj.id));
};
