import { deepCopy } from './deep';
import { dotPropSet, dotPropGet } from './dot-prop';

export const extendStateObj = (currentState, actionObject) => {
    if (
        typeof currentState === 'undefined' ||
        typeof actionObject === 'undefined'
    ) {
        return undefined;
    }

    if (
        typeof actionObject.path !== 'string' ||
        typeof actionObject.payload === 'undefined'
    ) {
        return undefined;
    }

    const noWhitespace = actionObject.path.replace(/\s/g, '');
    const stateCopy = deepCopy(currentState);

    const resultPayload = (typeof actionObject.payload === 'function')
        ? actionObject.payload(dotPropGet(stateCopy, noWhitespace))
        : actionObject.payload;

    if (noWhitespace === '') {
        return resultPayload;
    }

    return dotPropSet(stateCopy, actionObject.path, resultPayload);
};
