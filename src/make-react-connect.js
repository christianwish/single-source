const isReact163 = versionString => !!versionString.match(/^16\.3/);
const createObjectFromStore = (store, mappingObj) => {
    const objKeys = Object.keys(mappingObj);
    const resultObj = {};
    objKeys.forEach((propKey) => {
        resultObj[propKey] = store.getState(mappingObj[propKey]);
    });

    return resultObj;
};

export const makeReactConnect = (React, store, mappingObj) => (Component) => {
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
            const resultProps = {
                ...state,
                ...privates.state,
            };

            return <Component {...resultProps} />;
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
