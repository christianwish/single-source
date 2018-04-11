# single-source

__in progress!__
**Not available on npm yet!**
**Do not use this in production yet!**

### import/require
```js
import { createStore } from 'single-source';
// or
const createStore = require('single-source').createStore;
```
### createStore(initialState)
```js
const initialState = {
    items: [],
    currentLanguage: 'en',
    user: {
        email: 'user@email.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
};

const myStore = createStore(initialState);
```


### .getState()
_returns state or part of state_
```js
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


myStore.getState('user.email');
// 'tony@stark.com'

```


### .dispatch({ path, payload })
_changes the state_
```js
myStore.dispatch({
    path: 'items',
    payload: [1, 2, 3, 4],
});

myStore.getState();
/*{
    items: [1, 2, 3, 4],
    currentLanguage: 'en',
    user: {
        email: 'tony@stark.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
}*/

myStore.dispatch({
    path: 'user.email',
    payload: 'ironman@stark.com',
});

myStore.getState();
/*{
    items: [1, 2, 3, 4],
    currentLanguage: 'en',
    user: {
        email: 'ironman@stark.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
}*/
```
### __process function as payload__

If you pass a function as payload it will be executed with the current state (or part of state defiend by "path") as argument.
```js
const square = currentItemsArray => currentItemsArray.map(n => n * n);

myStore.dispatch({
    path: 'items',
    payload: square,
});

myStore.getState();
/*{
    items: [1, 4, 9, 16],
    currentLanguage: 'en',
    user: {
        email: 'ironman@stark.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
}*/
```
**NOTE: You can not store a function in your state. Just seralizable data can be stored! A function as payload will always executed to recive seralizable data**



### .subscribe(path, callback)
```js
myStore.subscribe('currentLanguage', (newLanguage) => {
    console.log('the new Language is: ', newLanguage);
})

myStore.dispatch({
    path: 'currentLanguage',
    payload: 'fr',
});
// 'the new Language is: fr'
```
**NOTE: If .dipatch does not change data the subscribed callback will not be executed.**
```js
myStore.subscribe('user.email', (newEmail) => {
    console.log('the new email is: ', newEmail);
})

myStore.dispatch({
    path: 'user.email',
    payload: 'ironman@stark.com',
});
// nothing logged because .dipatch not changed any data
```
