import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { connectReactComponent } from './connect';

describe('connectReactComponent()', () => {
    it('is a function', () => {
        const actual = typeof connectReactComponent;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns function', () => {
        const actual = typeof connectReactComponent();
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns function', () => {
        const actual = typeof connectReactComponent();
        const expected = 'function';
        expect(actual).toEqual(expected);
    });
});
