# single-source


### Usage
```js
import { createStore } from 'single-source';

const initialState = {
    items: [],
    currentLanguage: 'en',
};

const myStore = createStore(initialState);

myStore.getState('');
/*
{
    items: [],
    currentLanguage: 'en',
}
*/

```
