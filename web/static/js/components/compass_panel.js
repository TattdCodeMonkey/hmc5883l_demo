import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import Compass from './compass';

class CompassPanel extends Component {
  render() {
    let title = <h4>Compass</h4>;
    return (
      <Panel header={title} bsStyle="primary">
        <Compass size="200" />
      </Panel>
    );
  }
}

export default CompassPanel;
