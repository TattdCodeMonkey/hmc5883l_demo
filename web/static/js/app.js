import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import CompassLabel from './components/compass_label';
import CompassPanel from './components/compass_panel';

class App extends Component {
  render() {
    return (
      <Row>
        <Col sm={4}>
          <CompassPanel />
        </Col>
        <Col sm={4}>
          <CompassLabel />
        </Col>
      </Row>
    );
  }
}

export default App;
