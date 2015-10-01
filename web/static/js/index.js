import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import {initCompassSocket} from './utils/socket';
import reducer from './reducers';

const store = createStore(reducer);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('content')
);

initCompassSocket(store);
