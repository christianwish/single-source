import { filterSubscriptions } from './filter-subscriptions';

describe('filterSubscriptions(subscriptionsArray, oldState, newState)', () => {
    it('is a function', () => {
        const actual = typeof filterSubscriptions;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns array', () => {
        const actual = typeof filterSubscriptions();
        const expected = 'object';
        expect(actual).toEqual(expected);
    });

    it('returns empty array when subscriptionsArray is not of type array ', () => {
        const actual = filterSubscriptions(4, {}, {});
        const expected = [];
        expect(actual).toEqual(expected);
    });

    it('returns empty array when oldState or newState is not of type object ', () => {
        const actual = filterSubscriptions([], {}, {});
        const expected = [];
        expect(actual).toEqual(expected);
    });

    it('returns empty array when oldState or newState is not of type object ', () => {
        const actual = filterSubscriptions([], {}, {});
        const expected = [];
        expect(actual).toEqual(expected);
    });

    it('returns empty array when oldState and newState are deep equal', () => {
        const actual = filterSubscriptions([{}], { test: 3 }, { test: 3 });
        const expected = [];
        expect(actual).toEqual(expected);
    });

    it('returns filtered array with subscriptions', () => {
        {
            const testSubscriptions = [
                { path: 'test.innerTest.test', testId: 0 },
                { path: 'test.innerTest.test', testId: 1 },
                { path: 'test.innerTest', testId: 2 },
            ];
            const actual = filterSubscriptions(
                testSubscriptions,
                { test: { innerTest: { test: 3 } } },
                { test: { innerTest: { test: 2 } } },
            );
            const expected = testSubscriptions;
            expect(actual).toEqual(expected);
        }
        {
            const testSubscriptions = [
                { path: 'test.innerTest.test', testId: 0 },
                { path: 'test.innerTest.test', testId: 1 },
                { path: 'test.innerTest', testId: 2 },
            ];
            const actual = filterSubscriptions(
                testSubscriptions,
                { test: { innerTest: { test: 3 } }, test2: 6 },
                { test: { innerTest: { test: 3 } } },
            );
            const expected = [];
            expect(actual).toEqual(expected);
        }
    });
});
