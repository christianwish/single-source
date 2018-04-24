import { dotPropSet, dotPropGet } from './dot-prop';

describe('dotPropSet(sourceObj, path, value)', () => {
    it('is a function', () => {
        const actual = typeof dotPropSet;
        const expected = 'function';
        expect(actual).toBe(expected);
    });

    it('is a function', () => {
        const actual = dotPropSet({ test: 0 }, 'test', 1);
        const expected = { test: 1 };
        expect(actual).toEqual(expected);
    });

    it('returns sourceObj copy when path or value are not defined', () => {
        const sourceObj = { test: 0 };
        const actual = dotPropSet(sourceObj, undefined, undefined);
        const expected = sourceObj;
        expect(actual).toEqual(expected);
        expect(actual).not.toBe(expected);
    });
});

describe('dotPropGet(sourceObj, path)', () => {
    it('is a function', () => {
        const actual = typeof dotPropSet;
        const expected = 'function';
        expect(actual).toBe(expected);
    });

    it('is a function', () => {
        const actual = dotPropGet({ test: 0 }, 'test');
        const expected = 0;
        expect(actual).toEqual(expected);
    });

    it('returns sourceObj copy when path is not of type string', () => {
        const sourceObj = { test: 0 };
        const actual = dotPropGet(sourceObj, undefined);
        const expected = sourceObj;
        expect(actual).toEqual(expected);
        expect(actual).not.toBe(expected);
    });
});
