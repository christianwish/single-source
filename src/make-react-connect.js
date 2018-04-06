const isReact163 = versionString => !!versionString.match(/^16\.3/);
const createObjectFromStore = (store, mappingObj) => {
    const objKeys = Object.keys(mappingObj);
    const resultObj = {};
    objKeys.forEach((propKey) => {
        resultObj[propKey] = store.getState(mappingObj[propKey]);
    });

    return resultObj;
};

export const makeReactConnect = (React, store, mappingObj) => (OriginComponent) => {
    const Provider = (props) => {
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

        if (!isReact163(React.version)) {
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

    if (isReact163(React.version)) {
        Provider.getDerivedStateFromProps = (nextProps) => {
            return nextProps;
        };
    }

    return Provider;
};
