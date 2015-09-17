import alt from '../alt';
import CompassActions from '../actions/compass';

class CompassStore {
  constructor() {
    this.degrees = null;
    this.rawReading = null;

    this.bindActions(CompassActions);
  }

  onReceiveHeading(payload) {
    if (payload && payload.heading) {
      this.degrees = payload.heading;
    }
  }
}

export default alt.createStore(CompassStore, 'CompassStore');
