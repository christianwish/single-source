(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.singleSource = factory());
}(this, (function () { 'use strict';

    const isReact163 = versionString => !!versionString.match(/^16\.3/);
    const createObjectFromStore = (store, mappingObj) => {
        const objKeys = Object.keys(mappingObj);
        const resultObj = {};
        objKeys.forEach((propKey) => {
            resultObj[propKey] = store.getState(mappingObj[propKey]);
        });

        return resultObj;
    };

    const makeReactConnect = (React, store, mappingObj) => (OriginComponent) => {
        const Provider = (props) => {
            const $ = {
                ...React.Component.prototype,
                props,
                state: {},
            };

            const privates = {
                state: createObjectFromStore(store, mappingObj),
            };

            const objKeys = Object.keys(mappingObj);
            objKeys.forEach((propKey) => {
                const path = mappingObj[propKey];
                store.subscribe(path, (newData) => {
                    privates.state[propKey] = newData;
                    $.forceUpdate();
                });
            });

            // TODO:
            /*
            if (!isReact163(React.version)) {
                $.componentWillReceiveProps = (nextProps) => {
                    // props to state
                }
            }
            */

            $.render = () => {
                const { state } = $;
                const { children } = $.props;
                const resultProps = {
                    ...state,
                    ...privates.state,
                };

                return React.createElement(
                    OriginComponent,
                    resultProps,
                    children,
                );

                //return <Component {...resultProps} />;
            };

            return $;
        };

        if (isReact163(React.version)) {
            Provider.getDerivedStateFromProps = (nextProps) => {
                return nextProps;
            };
        }

        return Provider;
    };

    const deepCopy = obj => JSON.parse(JSON.stringify(obj));
    const deepEqual = (obj1, obj2) => (JSON.stringify(obj1) === JSON.stringify(obj2));

    const dotPropGet = (sourceObj, path) => {
        if (
            typeof sourceObj !== 'object' ||
            typeof path !== 'string'
        ) {
            return sourceObj;
        }

        if (path.match('.')) {
            const pathArray = path.split('.');
            const sourceObjClone = deepCopy(sourceObj);

            return pathArray.reduce((accumulator, prop) => {
                if (accumulator[prop]) {
                    return accumulator[prop];
                }

                return undefined;
            }, sourceObjClone);
        }

        return deepCopy(sourceObj);
    };

    const dotPropSet = (sourceObj, path, value) => {
        if (
            typeof sourceObj !== 'object' ||
            typeof path !== 'string'
        ) {
            return sourceObj;
        }

        const pathArray = path.split('.');

        let pointer = deepCopy(sourceObj);
        const lastIndex = pathArray.length - 1;
        const result = pointer;

        pathArray.forEach((prop, index) => {
            if ((`${pointer[prop]}  `) !== '[object Object]') {
                pointer[prop] = {};
            }

            if (index === lastIndex) {
                pointer[prop] = value;
            }

            pointer = pointer[prop];
        });

        return result;
    };

    const extendStateObj = (currentState, actionObject) => {
        if (
            typeof currentState === 'undefined' ||
            typeof actionObject === 'undefined'
        ) {
            return undefined;
        }

        if (typeof actionObject.path !== 'string') {
            return undefined;
        }

        if (typeof actionObject.payload === 'undefined') {
            return undefined;
        }

        const noWhitespace = actionObject.path.replace(/\s/g, '');

        if (noWhitespace === '') {
            return actionObject.payload;
        }

        const stateCopy = deepCopy(currentState);

        return dotPropSet(stateCopy, actionObject.path, actionObject.payload);
    };

    const filterSubscriptions = (subscriptionsArray, oldState, newState) => {
        if (
            !Array.isArray(subscriptionsArray) ||
            subscriptionsArray.length <= 0 ||
            typeof oldState !== 'object' ||
            typeof newState !== 'object' ||
            deepEqual(oldState, newState)
        ) {
            return [];
        }

        const result = subscriptionsArray.filter((subscription) => {
            const { path } = subscription;

            const oldStateFromPath = dotPropGet(oldState, path);
            const newStateFromPath = dotPropGet(newState, path);

            return !deepEqual(oldStateFromPath, newStateFromPath);
        });

        return result;
    };

    const unsubscribe = (subscriptionCollection, subscriptionObj) => {
        if (
            !Array.isArray(subscriptionCollection) ||
            subscriptionCollection.length === 0
        ) {
            return [];
        }

        if (
            typeof subscriptionObj !== 'object' ||
            typeof subscriptionObj.id !== 'number'
        ) {
            return deepCopy(subscriptionCollection);
        }

        return subscriptionCollection.filter(({ id }) => (id !== subscriptionObj.id));
    };

    const createStore = (initialState = {}) => {
        const privates = {
            state: deepCopy(initialState),
            subscriptionCollection: [],
        };

        const getState = (path = '') => {
            if (typeof path !== 'string' || path === '') {
                return deepCopy(privates.state);
            }

            const partOfObject = dotPropGet(privates.state, path);
            const typeofPart = typeof partOfObject;

            return (typeofPart === 'object')
                ? deepCopy(partOfObject)
                : (typeofPart !== 'undefined')
                ? partOfObject
                : undefined;
        };

        const dispatch = (actionObj) => {
            const lastState = deepCopy(privates.state);
            const newState = extendStateObj(privates.state, actionObj);

            if (deepEqual(lastState, newState)) {
                return undefined;
            }

            privates.state = newState;

            const filteredActionObjs = filterSubscriptions(
                privates.subscriptionCollection,
                lastState,
                newState,
            );

            if (filteredActionObjs.length === 0) {
                return undefined;
            }

            filteredActionObjs.forEach((action) => {
                const changedData = dotPropGet(privates.state, action.path);
                action.callback(changedData);
            });

            return undefined;
        };

        const subscribe = (path = '', callback) => {
            const now = Date.now();
            privates.subscriptionCollection.push({ path, callback, id: now });
            return { id: now };
        };

        const unsubscribeMethod = (subscriptionObj) => {
            privates.subscriptionCollection = unsubscribe(
                privates.subscriptionCollection,
                subscriptionObj,
            );

            return undefined;
        };

        return {
            dispatch,
            subscribe,
            unsubscribe: unsubscribeMethod,
            getState,
        };
    };

    var _export = {
        createStore,
        makeReactConnect,
    };

    return _export;

})));
