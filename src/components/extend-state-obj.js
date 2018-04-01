import { deepcopy } from './deepcopy';
import dotProp from 'dot-prop';

export const extendStateObj = (currentState, actionObject) => {
    if (
        typeof currentState === 'undefined' ||
        typeof actionObject === 'undefined'
    ) {
        return undefined;
    }

    if (typeof actionObject.path !== 'string') {
        throw new Error(`An action must have a path property`);
    }

    if (typeof actionObject.payload === 'undefined') {
        throw new Error(`An action must have a payload property`);
    }

    const noWhitespace = actionObject.path.replace(/\s/g, '');

    if (noWhitespace === '') {
        return actionObject.payload;
    }

    const stateCopy = deepcopy(currentState);

    return dotProp.set(stateCopy, actionObject.path, actionObject.payload);
};
