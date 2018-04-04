import { createStore } from './create-store';

describe('createStore(initialState)', () => {
    it('is a function', () => {
        const actual = typeof createStore;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns object', () => {
        const actual = typeof createStore();
        const expected = 'object';
        expect(actual).toEqual(expected);
    });

    describe('createStore(...).getState(path)', () => {
        it('is a function', () => {
            expect(typeof createStore().getState).toBe('function');
        });

        it('returns object', () => {
            const actual = typeof createStore().getState();
            const expected = 'object';
            expect(actual).toEqual(expected);
        });

        it('returns empty object when initialState was not of type object', () => {
            const actual = createStore().getState();
            const expected = {};
            expect(actual).toEqual(expected);
            expect(actual).not.toBe(expected);
        });

        it('returns new empty object when initialState was empty object ', () => {
            const actual = createStore({}).getState();
            const expected = {};
            expect(actual).toEqual(expected);
            expect(actual).not.toBe(expected);
        });

        it('returns deep copy of initialState', () => {
            const initialState = {
                test: 7,
            };
            const actual = createStore(initialState).getState();
            const expected = initialState;
            expect(actual).toEqual(expected);
            expect(actual).not.toBe(expected);
        });

        it('returns part of initialState defined by "path"', () => {
            {
                const testPath = 'test.innerTest';
                const initialState = {
                    test: {
                        innerTest: 6,
                    },
                };
                const actual = createStore(initialState).getState(testPath);
                const expected = 6;
                expect(actual).toEqual(expected);
            }
            {
                const testPath = 'test.innerTest';
                const initialState = {
                    test: {
                        innerTest: [1, 2, 3, 4],
                    },
                };
                const actual = createStore(initialState).getState(testPath);
                const expected = [1, 2, 3, 4];
                expect(actual).toEqual(expected);
            }
        });

        it.skip('path can reach to an index in an array', () => {
            const testPath = 'test.innerTest[2]';
            const initialState = {
                test: {
                    innerTest: [1, 2, 3, 4],
                },
            };
            const actual = createStore(initialState).getState(testPath);
            const expected = 3;
            expect(actual).toEqual(expected);
        });

        it('get changed state when .dispatch() was executed', () => {
            {
                const testStore = createStore({
                    test: {
                        innerTest: [1, 2, 3, 4],
                    },
                });

                testStore.dispatch({
                    path: 'test.innerTest',
                    payload: [2, 2],
                });

                const testPath = 'test.innerTest';

                const actual = testStore.getState(testPath);
                const expected = [2, 2];
                expect(actual).toEqual(expected);
            }
            {
                const testStore = createStore({
                    test: {
                        innerTest: [1, 2, 3, 4],
                    },
                });

                testStore.dispatch({
                    path: 'test',
                    payload: [2, 2],
                });

                const testPath = 'test';

                const actual = testStore.getState(testPath);
                const expected = [2, 2];
                expect(actual).toEqual(expected);
            }
            {
                const testStore = createStore({
                    test: {
                        innerTest: [1, 2, 3, 4],
                    },
                    test2: 6,
                });

                testStore.dispatch({
                    path: 'test',
                    payload: [2, 2],
                });

                const actual = testStore.getState();
                const expected = { test: [2, 2], test2: 6 };
                expect(actual).toEqual(expected);
            }
        });

        it('returns undefined when path points to nothing', () => {
            {
                const testStore = createStore({
                    test: {
                        innerTest: [1, 2, 3, 4],
                    },
                });

                testStore.dispatch({
                    path: 'test',
                    payload: [2, 2],
                });

                const testPath = 'test.innerTest';

                const actual = testStore.getState(testPath);
                const expected = undefined;
                expect(actual).toEqual(expected);
            }
        });
    });

    describe(`createStore(...).dispatch(path)
    &
    createStore(...).subscribe(path = '', callback)`, () => {
        it('is a function', () => {
            const actual = typeof createStore().dispatch;
            const expected = 'function';
            expect(actual).toEqual(expected);
        });

        it('dispatch returns undefined', () => {
            const actual = typeof createStore().dispatch();
            const expected = 'undefined';
            expect(actual).toEqual(expected);
        });

        it('subscribe returns object', () => {
            const actual = typeof createStore().subscribe();
            const expected = 'object';
            expect(actual).toEqual(expected);
        });

        it('subscribe returns object with property id of type number', () => {
            const actual = typeof createStore().subscribe().id;
            const expected = 'number';
            expect(actual).toEqual(expected);
        });

        it('executes callback when subscribed and dispatched', () => {
            const testStore = createStore({ test: false });
            const testCallback = jest.fn();
            testStore.subscribe('', testCallback);
            testStore.dispatch({
                path: 'test',
                payload: 4,
            });
            expect(testCallback.mock.calls.length).toEqual(1);
        });

        it('does not executes callback when subscribed path not part of dispatch', () => {
            const testStore = createStore({ test: false, test2: false });
            const testCallback = jest.fn();
            testStore.subscribe('test2', testCallback);
            testStore.dispatch({
                path: 'test',
                payload: 4,
            });
            expect(testCallback.mock.calls.length).toEqual(0);
        });

        it('does not executes callback when dispatch payload is equal to state', () => {
            const testStore = createStore({ test: false, test2: false });
            const testCallback = jest.fn();
            testStore.subscribe('test2', testCallback);
            testStore.dispatch({
                path: 'test',
                payload: false,
            });
            expect(testCallback.mock.calls.length).toEqual(0);
        });

        it('callback argument is new data by path', () => {
            {
                const testStore = createStore({ test: false, test2: false });
                const testCallback = jest.fn();
                testStore.subscribe('test', testCallback);
                testStore.dispatch({
                    path: 'test',
                    payload: 4,
                });
                expect(testCallback.mock.calls[0][0]).toEqual(4);
            }
            {
                const testStore = createStore({
                    a: false,
                    b: false,
                    c: false,
                });
                const testCallback = jest.fn();
                testStore.subscribe('c', testCallback);
                testStore.dispatch({
                    path: 'c',
                    payload: 'c changed',
                });
                expect(testCallback.mock.calls[0][0]).toEqual('c changed');
            }
            {
                const testStore = createStore({
                    a: false,
                    b: false,
                    c: {
                        d: false,
                    },
                });
                const testCallback = jest.fn();
                testStore.subscribe('c', testCallback);
                testStore.dispatch({
                    path: 'c.d',
                    payload: 'd changed',
                });
                expect(testCallback.mock.calls[0][0]).toEqual({ d: 'd changed' });
            }
        });
    });

    describe('createStore(...).unsubscribe()', () => {
        it('is a function', () => {
            const actual = typeof createStore().unsubscribe;
            const expected = 'function';
            expect(actual).toEqual(expected);
        });

        it('returns undefined', () => {
            const actual = typeof createStore().unsubscribe();
            const expected = 'undefined';
            expect(actual).toEqual(expected);
        });

        it('does not executes callback when unsubscribed and dispatched', () => {
            {
                const testStore = createStore({ test: false });
                const testCallback = jest.fn();
                const supscriptionObj = testStore.subscribe('', testCallback);
                testStore.dispatch({
                    path: 'test',
                    payload: 4,
                });
                expect(testCallback.mock.calls.length).toEqual(1);
                testStore.unsubscribe(supscriptionObj);
                testStore.dispatch({
                    path: 'test',
                    payload: 9999,
                });
                expect(testCallback.mock.calls.length).toEqual(1);
            }
            {
                const testStore = createStore({ test: false });
                const testCallback = jest.fn();
                const supscriptionObj = testStore.subscribe('', testCallback);
                testStore.unsubscribe(supscriptionObj);
                testStore.dispatch({
                    path: 'test',
                    payload: 4,
                });
                expect(testCallback.mock.calls.length).toEqual(0);
            }
        });
    });
});
