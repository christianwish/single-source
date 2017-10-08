import { createStore } from './create-store';

describe('createStore(checkArray, jsx)', () => {
    it('is a function', () => {
        expect(typeof createStore).toBe('function');
    });

    it('returns object', () => {
        expect(typeof createStore()).toBe('object');
    });
});
