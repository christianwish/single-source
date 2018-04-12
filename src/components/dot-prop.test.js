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
});
