import React from 'react';
import App from './app';
import {initCompassSocket} from './utils/socket';

React.render(
  <App />,
  document.getElementById('content')
);

initCompassSocket();
