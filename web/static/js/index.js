import React from 'react';
import App from './app';
import {initCompassSocket} from './utils/socket';
import styles from '../css/app.scss';

React.render(
  <App />,
  document.getElementById('content')
);

initCompassSocket();
