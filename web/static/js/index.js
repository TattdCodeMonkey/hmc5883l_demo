import React from 'react';
import App from './app';
import Socket from './utils/socket';
import styles from '../css/app.scss';

React.render(
  <App />,
  document.getElementById('content')
);

Socket.init();
