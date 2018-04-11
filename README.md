# single-source

### import/require
```sh
$ npm install single-source
# or
$ yarn add single-source
```
```js
import { createStore } from 'single-source';
// or
const createStore = require('single-source').createStore;
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
### __process function as payload__

If you pass a function as payload it will be executed with the current state (or part of state defiend by "path") as argument.
```js
import { createStore } from 'single-source';

const ITEMS = 'items';
const initialState = {
    items: [],
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
**NOTE: You can not store a function in your state. Just seralizable data can be stored! A function as payload will always executed to recive seralizable data**



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
