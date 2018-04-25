import { reactHasGetDerivedStateFromProps } from './react-has-get-derived-state-from-props';

describe('reactHasGetDerivedStateFromProps(versionString)', () => {
    it('is a function', () => {
        const actual = typeof reactHasGetDerivedStateFromProps;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns boolean', () => {
        const actual = typeof reactHasGetDerivedStateFromProps();
        const expected = 'boolean';
        expect(actual).toEqual(expected);
    });

    it('returns true when versionString >= 16.3', () => {
        {
            const actual = reactHasGetDerivedStateFromProps('16.4.0');
            expect(actual).toBeTruthy();
        }
        {
            const actual = reactHasGetDerivedStateFromProps('17.0.0');
            expect(actual).toBeTruthy();
        }
    });

    it('returns false when versionString < 16.3', () => {
        {
            const actual = reactHasGetDerivedStateFromProps('16.2.9');
            expect(actual).toBeFalsy();
        }
        {
            const actual = reactHasGetDerivedStateFromProps('15.9.9');
            expect(actual).toBeFalsy();
        }
    });
});
