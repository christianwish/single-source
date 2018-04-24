import { deepCopy } from './deep';

export const dotPropGet = (sourceObj, path) => {
    if (
        typeof sourceObj !== 'object' ||
        typeof path !== 'string'
    ) {
        return deepCopy(sourceObj);
    }

    if (path.match('.')) {
        const pathArray = path.split('.');
        const sourceObjClone = deepCopy(sourceObj);

        return pathArray.reduce((accumulator, prop) => {
            if (typeof accumulator[prop] !== 'undefined') {
                return accumulator[prop];
            }

            return undefined;
        }, sourceObjClone);
    }

    return deepCopy(sourceObj);
};

export const dotPropSet = (sourceObj, path, value) => {
    if (
        typeof sourceObj !== 'object' ||
        typeof path !== 'string' ||
        typeof value === 'undefined'
    ) {
        return deepCopy(sourceObj);
    }

    const pathArray = path.split('.');

    let pointer = deepCopy(sourceObj);
    const lastIndex = pathArray.length - 1;
    const result = pointer;

    pathArray.forEach((prop, index) => {
        if ((`${pointer[prop]}`) !== '[object Object]') {
            pointer[prop] = {};
        }

        if (index === lastIndex) {
            pointer[prop] = value;
        }

        pointer = pointer[prop];
    });

    return result;
};
