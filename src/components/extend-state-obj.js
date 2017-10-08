import deepcopy from 'deepcopy';
import dotProp from 'dot-prop';

export const extendStateObj = (currentState, actionObject) => {
    if (
        typeof currentState === 'undefined' ||
        typeof actionObject === 'undefined'
    ) {
        return undefined;
    }

    if (typeof actionObject.type !== 'string') {
        throw new Error(`An action must have a type property`);
    }

    if (typeof actionObject.payload === 'undefined') {
        throw new Error(`An action must have a payload property`);
    }

    const noWhitespace = actionObject.type.replace(/\s/g, '');
    
    if (noWhitespace === '') {
        return actionObject.payload;
    }

    const stateCopy = deepcopy(currentState);

    dotProp.set(stateCopy, actionObject.type, actionObject.payload)

    return stateCopy;
};
