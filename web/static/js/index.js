import React from 'react';
import Socket from './utils/socket';
import App from './containers/app';
import styles from '../css/app.scss';

React.render(<App />, document.getElementById('content'));


Socket.update_heading = (degrees) => {

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
