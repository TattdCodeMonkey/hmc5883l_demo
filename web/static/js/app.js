import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import HeadingPanel from './components/heading_panel';
import CompassPanel from './components/compass_panel';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={4}>
            <CompassPanel />
          </Col>
          <Col sm={4}>
            <HeadingPanel />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
