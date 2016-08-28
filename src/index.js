import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './local_storage';
import _ from 'lodash';

import App from './components/app';
import reducers from './reducers';

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState
);

store.subscribe(_.throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
