import { reactHasGetDerivedStateFromProps } from './utils/react-has-get-derived-state-from-props';

const createObjectFromStore = (store, mappingObj) => {
    const objKeys = Object.keys(mappingObj);
    const resultObj = {};
    objKeys.forEach((propKey) => {
        resultObj[propKey] = store.getState(mappingObj[propKey]);
    });

    return resultObj;
};

export const makeReactConnect = (React, store, mappingObj) => (OriginComponent) => {
    const SingleSourceProvider = (props) => {
        const $ = {
            ...React.Component.prototype,
            props,
            state: props,
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

        if (!reactHasGetDerivedStateFromProps(React.version)) {
            $.componentWillReceiveProps = nextProps => $.setState(nextProps);
        }

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
        };

        return $;
    };

    if (reactHasGetDerivedStateFromProps(React.version)) {
        SingleSourceProvider.getDerivedStateFromProps = (nextProps) => {
            return nextProps;
        };
    }

    return SingleSourceProvider;
};
