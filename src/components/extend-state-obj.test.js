import { extendStateObj } from './extend-state-obj'

describe('extendStateObj(currentState, actionObject)', () => {
    it('is a function', () => {
        const actual = typeof extendStateObj;
        const expected = 'function';
        expect(actual).toBe(expected);
    });

    it('returns undefined when no arguments are passed', () => {
        const actual = typeof extendStateObj();
        const expected = 'undefined';
        expect(actual).toBe(expected);
    });

    it('returns undefined when actionObject is not passed', () => {
        const currentState = { test:1 };
        const actual = extendStateObj(currentState);
        const expected = undefined;
        expect(actual).toEqual(expected);
    });

    it('throws when actionObject has no type property', () => {
        const currentState = { test:1 };
        const actionObject = {
            payload: 1,
        };
        const actual = () => extendStateObj(currentState, actionObject);
        expect(actual).toThrow();
    });

    it('throws when actionObject.type is not of type string', () => {
        const currentState = { test:1 };
        const actionObject = {
            payload: 1,
            type: 5,
        };
        const actual = () => extendStateObj(currentState, actionObject);
        expect(actual).toThrow();
    });

    it('throws when actionObject has no payload property', () => {
        const currentState = { test:1 };
        const actionObject = {
            type: '',
        };
        const actual = () => extendStateObj(currentState, actionObject);
        expect(actual).toThrow();
    });

    it('removes and switches the hole currentState when actionObject.type is a empty string', () => {
        const currentState = { test:1 };
        const actionObject = {
            type: '',
            payload: [],
        };
        const actual = extendStateObj(currentState, actionObject);
        expect(actual).toEqual([]);
    });

    it('extends object with given path in actionObject.type and set payload as value', () => {
        {
            const currentState = { test:1 };
            const actionObject = {
                type: 'test.innerTest',
                payload: 1,
            };
            const actual = extendStateObj(currentState, actionObject);
            expect(actual).toHaveProperty('test.innerTest', 1);
        }
        {
            const currentState = { test:1 };
            const actionObject = {
                type: 'apple.innerTest.innerInnerTest',
                payload: true,
            };
            const actual = extendStateObj(currentState, actionObject);
            expect(actual).toHaveProperty('apple.innerTest.innerInnerTest', true);
        }
    });

    it('returns a changed deep copy of currentState', () => {
        const currentState = { test:1 };
        const actionObject = {
            type: 'test',
            payload: 1,
        };
        const actual = extendStateObj(currentState, actionObject);
        currentState.test2 = 3;

        expect(actual).not.toBe(currentState);
        expect(actual).toHaveProperty('test', 1);
        expect(actual).not.toHaveProperty('test2', 3);
    });
});
