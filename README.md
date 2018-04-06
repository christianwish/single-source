# single-source


### Usage
```js
import { createStore } from 'single-source';

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

myStore.getState('');
/*
{
    items: [],
    currentLanguage: 'en',
    user: {
        email: 'user@email.com',
        firstName: 'Tony',
        lastName: 'Stark'
    }
}
*/

myStore.getState('user.email');
// 'user@email.com'

```
