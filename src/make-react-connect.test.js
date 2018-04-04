import React from 'react';
import { create } from 'react-test-renderer';
import { makeReactConnect } from './make-react-connect';
import { createStore } from './create-store';

const TestComponent = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
    };

    $.render = () => {
        const { text, headline } = $.props;

        return (
            <div className={'test-component'}>
                <h1>{ headline }</h1>
                { text }
            </div>
        );
    };

    return $;
};

describe('makeReactConnect(React, )', () => {
    it('is a function', () => {
        const actual = typeof makeReactConnect;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns function', () => {
        const actual = typeof makeReactConnect();
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('--- no connection ---', () => {
        const props = {
            headline: 'Hello World',
            text: 'no text yet',
        };
        const actual = create(<TestComponent {...props} />);
        expect(actual).toMatchSnapshot();
    });

    it('returns connected component', () => {
        const testStore = createStore({ testData: { text: 'HelloWorld!' } });
        const ConnectedComponent =
            makeReactConnect(React, testStore, {
                text: 'testData.text',
            })(TestComponent);
        const props = {
            headline: 'Hello World',
            text: 'no text yet',
        };
        const actual = create(<ConnectedComponent {...props} />);
        expect(actual).toMatchSnapshot();
    });

    it('rerenders connected component when dispatch', () => {
        const testStore = createStore({ testData: { text: 'HelloWorld!' } });
        const ConnectedComponent =
            makeReactConnect(React, testStore, {
                text: 'testData.text',
            })(TestComponent);
        const props = {
            headline: 'Hello World',
            text: 'no text yet',
        };
        testStore.dispatch({
            path: 'testData.text',
            payload: 'refreshed text!',
        });

        const actual = create(<ConnectedComponent {...props} />);
        expect(actual).toMatchSnapshot();
    });
});
