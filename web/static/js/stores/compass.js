import alt from '../alt';
import CompassActions from '../actions/compass';

class CompassStore {
  constructor() {
    this.degrees = null;
    this.rawReading = null;

    this.bindActions(CompassActions);
  }

  onReceiveHeading(heading) {
    this.degrees = heading;
  }
}

export default alt.createStore(CompassStore, 'CompassStore');
