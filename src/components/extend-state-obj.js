import { deepCopy } from './deep';
import { dotPropSet } from './dot-prop';

export const extendStateObj = (currentState, actionObject) => {
    if (
        typeof currentState === 'undefined' ||
        typeof actionObject === 'undefined'
    ) {
        return undefined;
    }

    if (typeof actionObject.path !== 'string') {
        return undefined;
    }

    if (typeof actionObject.payload === 'undefined') {
        return undefined;
    }

    const noWhitespace = actionObject.path.replace(/\s/g, '');

    if (noWhitespace === '') {
        return actionObject.payload;
    }

    const stateCopy = deepCopy(currentState);

    return dotPropSet(stateCopy, actionObject.path, actionObject.payload);
};
