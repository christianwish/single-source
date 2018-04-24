# single-source

[![Build Status](https://travis-ci.org/christianheyn/single-source.svg?branch=master)](https://travis-ci.org/christianheyn/single-source)
[![Coverage Status](https://coveralls.io/repos/github/christianheyn/single-source/badge.svg?branch=master)](https://coveralls.io/github/christianheyn/single-source?branch=master)
[![npm version](https://badge.fury.io/js/single-source.svg)](https://badge.fury.io/js/single-source)

Simple state managment in JavaScript.

Create a store and connect it to React components.

### import/require
```sh
$ npm install single-source
# or yarn add single-source
```
```js
import { createStore, makeReactConnect } from 'single-source';
// or
const singleSource = require('single-source');
const createStore = singleSource.createStore;
const makeReactConnect = singleSource.makeReactConnect;
```
### createStore( initialState )
```js
import { createStore } from 'single-source';

const initialState = {
    items: [],
    currentLanguage: 'en',
    user: {
        email: 'tony@stark.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
};

const myStore = createStore(initialState);
```

___
### .getState( [path] )
get the current state
```js
import { createStore } from 'single-source';

const initialState = {
    items: [],
    currentLanguage: 'en',
    user: {
        email: 'tony@stark.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
};

const myStore = createStore(initialState);

myStore.getState();
/*{
    items: [],
    currentLanguage: 'en',
    user: {
        email: 'tony@stark.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
}*/
```
[try this on runkit](https://runkit.com/christianheyn/single-source-getstate)

Get a reduced state based on the given path
```js
import { createStore } from 'single-source';

const USER_EMAIL = 'user.email';

const initialState = {
    items: [],
    currentLanguage: 'en',
    user: {
        email: 'tony@stark.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
};

const myStore = createStore(initialState);

myStore.getState(USER_EMAIL);
// 'tony@stark.com'

```
[try this on runkit](https://runkit.com/christianheyn/5ace44d4c4912c0012197e89)

___

### .dispatch({ path, payload })
_changes the state_
```js
import { createStore } from 'single-source';

const USER_EMAIL = 'user.email';

const initialState = {
    items: [],
    currentLanguage: 'en',
    user: {
        email: 'tony@stark.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
};

const myStore = createStore(initialState);

myStore.dispatch({
    path: USER_EMAIL,
    payload: 'ironman@stark.com',
});

myStore.getState(USER_EMAIL);
// 'ironman@stark.com'
```

[try this on runkit](https://runkit.com/christianheyn/single-source-dispatch-path-value)

### __process function as payload__

If you pass a function as payload it will be executed with the current state (or part of state defiend by "path") as argument.
```js
import { createStore } from 'single-source';

const ITEMS = 'items';
const initialState = {
    items: [1, 2, 3, 4],
    currentLanguage: 'en',
};
const myStore = createStore(initialState);
const square = currentItemsArray => currentItemsArray.map(n => n * n);

myStore.dispatch({
    path: ITEMS,
    payload: square,
});

myStore.getState();
/*{
    items: [1, 4, 9, 16],
    currentLanguage: 'en',
}*/
```
[try this on runkit](https://runkit.com/christianheyn/single-source-dispatch-path-payload-func)

**NOTE: You can not store a function in your state. Just seralizable data can be stored! A function as payload will always executed to recive seralizable data**
___


### .subscribe(path, callback)
```js
import { createStore } from 'single-source';

const CURRENT_LANG = 'currentLanguage';
const initialState = {
    items: [],
    currentLanguage: 'en',
};
const myStore = createStore(initialState);

myStore.subscribe(CURRENT_LANG, (newLanguage) => {
    console.log('the new Language is: ', newLanguage);
})

myStore.dispatch({
    path: CURRENT_LANG,
    payload: 'fr',
});
// log -> 'the new Language is: fr'
```
[try this on runkit](https://runkit.com/christianheyn/single-source-subscribe-path-callback)

**NOTE: If .dipatch does not change data the subscribed callback will not be executed.**
```js
import { createStore } from 'single-source';

const CURRENT_LANG = 'currentLanguage';
const initialState = {
    items: [],
    currentLanguage: 'en',
};
const myStore = createStore(initialState);

myStore.subscribe(CURRENT_LANG, (newLanguage) => {
    console.log('the new Language is: ', newLanguage);
})

myStore.dispatch({
    path: CURRENT_LANG,
    payload: 'en',
});

// nothing logged because .dipatch not changed any data
```


---

## makeReactConnect(React, store, mapObj)(YourComponent)

Connect React Components to the store.
No Provider Component needed.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { makeReactConnect, createStore } from 'single-source';

const initialState = {
    counter: 0,
};

const store = createStore(initialState);
const COUNTER = 'counter';
const increase = n => (n + 1);
const square = n => (n * n);

const handleIncrease = () => store.dispatch({
    path: COUNTER,
    payload: increase,
});

const handleSquare = () => store.dispatch({
    path: COUNTER,
    payload: square,
});

const CounterDisplay = props => (
    <input type={'number'} readOnly value={props.counter || 0} />
);

const ConnectedCounterDisplay = makeReactConnect(
    React,
    store,
    { counter: COUNTER },
)(CounterDisplay);

const App = () => (
    <div className="app">
        <ConnectedCounterDisplay />
        <button onClick={handleIncrease}>+ 1</button>
        <button onClick={handleSquare}>n * n</button>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

```
[try this example here](https://github.com/christianheyn/single-source-example/blob/master/index.js)

___

## Why?


If you are like me you are already thinking in paths when it comes to serializable data.
What i call _path_ does not mean something complicated.

```
{
 user: {
        email: 'tony@stark.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
}
```

the _path_ `'user.email'` points to `'tony@stark.com'`.
So the string `'user.email'` **reduces** your data to a specific part of an object.

With this in mind it should be easy to handle bigger states in JavaScript applications. Put paths in constants or create new paths dynamically. Use pure-functions to mutate your state

I hope this small tool helps you decrease the complexity of state management in apps.

If you worked with tools like **[redux](https://redux.js.org/)** you probably won't replace it with single-source. There are no performance tests for single-source yet.


_Thanks for reading!_
