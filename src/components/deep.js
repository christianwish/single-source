export const deepCopy = obj => JSON.parse(JSON.stringify(obj));
export const deepEqual = (obj1, obj2) => (JSON.stringify(obj1) === JSON.stringify(obj2));

