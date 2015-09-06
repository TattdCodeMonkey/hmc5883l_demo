import alt from '../alt';

class CompassActions {
  receiveHeading(degrees) {
    this.dispatch(degrees);
  }
}

export default alt.createActions(CompassActions);
