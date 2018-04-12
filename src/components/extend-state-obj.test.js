import { extendStateObj } from './extend-state-obj';

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
        const currentState = { test: 1 };
        const actual = extendStateObj(currentState);
        const expected = undefined;
        expect(actual).toEqual(expected);
    });

    it('throws when actionObject has no path property', () => {
        const currentState = { test: 1 };
        const actionObject = {
            payload: 1,
        };
        const actual = extendStateObj(currentState, actionObject);
        const expected = undefined;
        expect(actual).toEqual(expected);
    });

    it('throws when actionObject.path is not of type string', () => {
        const currentState = { test: 1 };
        const actionObject = {
            payload: 1,
            path: 5,
        };
        const actual = extendStateObj(currentState, actionObject);
        const expected = undefined;
        expect(actual).toEqual(expected);
    });

    it('throws when actionObject has no payload property', () => {
        const currentState = { test: 1 };
        const actionObject = {
            path: '',
        };
        const actual = extendStateObj(currentState, actionObject);
        const expected = undefined;
        expect(actual).toEqual(expected);
    });

    it('switches the hole currentState when actionObject.path is a empty string', () => {
        const currentState = { test: 1 };
        const actionObject = {
            path: '',
            payload: [],
        };
        const actual = extendStateObj(currentState, actionObject);
        expect(actual).toEqual([]);
    });

    it('extends object with given path in actionObject.path and set payload as value', () => {
        {
            const currentState = { test: 1 };
            const actionObject = {
                path: 'test.innerTest',
                payload: 1,
            };
            const actual = extendStateObj(currentState, actionObject);
            expect(actual).toHaveProperty('test.innerTest', 1);
        }
        {
            const currentState = { test: 1 };
            const actionObject = {
                path: 'apple.innerTest.innerInnerTest',
                payload: true,
            };
            const actual = extendStateObj(currentState, actionObject);
            expect(actual).toHaveProperty('apple.innerTest.innerInnerTest', true);
        }
    });

    it('returns a changed deep copy of currentState', () => {
        const currentState = { test: 1 };
        const actionObject = {
            path: 'test',
            payload: 1,
        };
        const actual = extendStateObj(currentState, actionObject);
        currentState.test2 = 3;

        expect(actual).not.toBe(currentState);
        expect(actual).toHaveProperty('test', 1);
        expect(actual).not.toHaveProperty('test2', 3);
    });

    it('payload can be a function that will executed', () => {
        const testFunc = jest.fn();
        const currentState = { test: 1 };
        const actionObject = {
            path: 'test',
            payload: testFunc,
        };
        extendStateObj(currentState, actionObject);
        expect(testFunc.mock.calls.length).toEqual(1);
    });

    it('payload can be a function that will process the payload data', () => {
        const testFunc = () => 3;
        const currentState = { test: 1 };
        const actionObject = {
            path: 'test',
            payload: testFunc,
        };
        const actual = extendStateObj(currentState, actionObject);
        expect(actual).toEqual({ test: 3 });
    });

    it('payload can be a function that can handle state with value 0', () => {
        const currentState = { test: 0 };
        const actionObject = {
            path: 'test',
            payload: n => (n + 1),
        };
        const actual = extendStateObj(currentState, actionObject);

        expect(actual).not.toBe(currentState);
        expect(actual).toHaveProperty('test', 1);
    });

    it(`payload as a function will give current part of
      state as argument to process the new state : (currentState) => {}`, () => {
        {
            const testFunc = n => (n + 3);
            const currentState = { test: 2 };
            const actionObject = {
                path: 'test',
                payload: testFunc,
            };
            const actual = extendStateObj(currentState, actionObject);
            expect(actual).toEqual({ test: 5 });
        }
        {
            const switchBool = currentState => currentState.map(bool => !bool);
            const currentState = { boolArray: [true, false, true] };
            const actionObject = {
                path: 'boolArray',
                payload: switchBool,
            };
            const actual = extendStateObj(currentState, actionObject);
            expect(actual).toEqual({ boolArray: [false, true, false] });
        }
    });
});
