import { unsubscribe } from './unsubscribe';

describe('unsubscribe(subscriptionCollection, subscriptionObj)', () => {
    it('is a function', () => {
        const actual = typeof unsubscribe;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns array', () => {
        const actual = Array.isArray(unsubscribe());
        expect(actual).toBeTruthy();
    });

    it('returns empty array when no argumnets are given', () => {
        const actual = unsubscribe();
        const expected = [];
        expect(actual).toEqual(expected);
    });

    it('returns empty array when when subscriptionCollection is empty array', () => {
        const actual = unsubscribe([]);
        const expected = [];
        expect(actual).toEqual(expected);
    });

    it('returns subscriptionCollection copy when when subscriptionObj is undefied', () => {
        const testSubscriptionCollection = [1, 2, 7, 9];
        const actual = unsubscribe(testSubscriptionCollection);
        const expected = testSubscriptionCollection;
        expect(actual).toEqual(expected);
        expect(actual).not.toBe(testSubscriptionCollection);
    });

    it(`returns subscriptionCollection copy when when
        subscriptionObj.id does not match any subscriptionId`, () => {
        const testSubscriptionCollection = [
            { id: 1234 },
            { id: 5678 },
        ];
        const actual = unsubscribe(testSubscriptionCollection, { id: 123 });
        const expected = testSubscriptionCollection;
        expect(actual).toEqual(expected);
        expect(actual).not.toBe(testSubscriptionCollection);
    });

    it('returns subscriptionCollection copy with one less subscription', () => {
        const testSubscriptionCollection = [
            { id: 1234 },
            { id: 5678 },
            { id: 999 },
        ];
        const actual = unsubscribe(testSubscriptionCollection, { id: 5678 });
        const expected = [
            { id: 1234 },
            { id: 999 },
        ];

        expect(actual).toEqual(expected);
    });
});
