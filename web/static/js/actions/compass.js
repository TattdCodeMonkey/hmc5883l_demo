import alt from '../alt';

class CompassActions {
  receiveHeading(payload) {
    this.dispatch(payload);
  }
}

export default alt.createActions(CompassActions);
