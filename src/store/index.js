import { createStore } from 'redux';

import reducers from './ducks';

/* eslint-disable no-underscore-dangle */
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const store = createStore(reducers, devTools);

export default store;
