import React from 'react';
import Socket from './utils/socket';
import Compass from './compass';
import App from './containers/app';
import styles from '../css/app.scss';

React.render(<App />, document.getElementById('content'));

Compass.init();
Socket.update_heading = (degrees) => {
  Compass.updateHeading(degrees);
};

Socket.init();
//import Compass from 'web/static/js/compass';
// const App = {
//   init() {
//     Compass.init();
//     Socket.init();
//
//     Socket.update_heading = (degrees) => {
//       Compass.updateHeading(degrees);
//     };
//   }
// }
//
// App.init();
