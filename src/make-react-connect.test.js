import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
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

const TestComponentWithChildren = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
    };

    $.render = () => {
        const { children } = $.props;

        return (
            <div className={'test-component-with-children'}>
                { children }
            </div>
        );
    };

    return $;
};

describe('makeReactConnect(React, store, mappingObj)', () => {
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

    it('mounted component updates on dispatch', () => {
        const testStore = createStore({ testData: { text: 'StoreText!' } });
        const ConnectedComponent = makeReactConnect(React, testStore, {
            text: 'testData.text',
        })(TestComponent);
        const props = {
            headline: 'defaultProps',
            text: 'no text yet',
        };
        const wrapper = mount(<ConnectedComponent {...props} />);
        const actualBefore = wrapper.find('div').text();
        expect(actualBefore).toEqual('defaultPropsStoreText!');

        testStore.dispatch({
            path: 'testData.text',
            payload: 'refreshed text!',
        });
        const actualAfter = wrapper.find('div').text();
        expect(actualAfter).toEqual('defaultPropsrefreshed text!');
        expect(actualBefore).not.toEqual(actualAfter);
    });

    it('mounted component updates on dispatch with older React version', () => {
        const oldReactMock = {
            ...React,
            version: '15.0.0',
        };
        const testStore = createStore({ testData: { text: 'StoreText!' } });
        const ConnectedComponent = makeReactConnect(oldReactMock, testStore, {
            text: 'testData.text',
        })(TestComponent);
        const props = {
            headline: 'defaultProps',
            text: 'no text yet',
        };
        const wrapper = mount(<ConnectedComponent {...props} />);
        const actualBefore = wrapper.find('div').text();
        expect(actualBefore).toEqual('defaultPropsStoreText!');

        testStore.dispatch({
            path: 'testData.text',
            payload: 'refreshed text!',
        });
        const actualAfter = wrapper.find('div').text();
        expect(actualAfter).toEqual('defaultPropsrefreshed text!');
        expect(actualBefore).not.toEqual(actualAfter);
    });

    it('renders children', () => {
        const testStore = createStore({ testData: { text: 'HelloWorld!' } });
        const ConnectedComponent =
            makeReactConnect(React, testStore, {
                text: 'testData.text',
            })(TestComponentWithChildren);
        const props = {
            headline: 'Hello World',
            text: 'no text yet',
        };
        testStore.dispatch({
            path: 'testData.text',
            payload: 'refreshed text!',
        });

        const actual = create(
            <ConnectedComponent {...props}>
                <h1>Children</h1>
                <p>child 2</p>
                Test
            </ConnectedComponent>,
        );
        expect(actual).toMatchSnapshot();
    });
});
