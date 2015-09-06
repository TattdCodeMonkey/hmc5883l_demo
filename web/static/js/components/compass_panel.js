import React, {Component} from 'react';
import Compass from './compass';

class CompassPanel extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">Compass</h4>
        </div>
        <div className="panel-body">
          <Compass size="200" />
        </div>
      </div>
    );
  }
}

export default CompassPanel;
