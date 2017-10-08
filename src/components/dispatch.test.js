import { dispatch } from './dispatch'

describe('dispatch(currentState, actionObject)', () => {
    it('is a function', () => {
        const actual = typeof dispatch;
        const expected = 'function';
        expect(actual).toBe(expected);
    });
});
