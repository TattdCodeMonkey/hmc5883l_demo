import Compass from 'web/static/js/compass';
import Socket from 'web/static/js/socket';

const App = {
  init() {
    Compass.init();
    Socket.init();

    Socket.update_heading = (degrees) => {
      Compass.updateHeading(degrees);
    };
  }
}

App.init();

export default App;
