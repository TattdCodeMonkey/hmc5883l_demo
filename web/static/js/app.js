import React, { Component } from 'react';
import Compass from './components/compass';
import CompassLabel from './components/compass_label';

class App extends Component {
  render() {
    return (
      <div className="compass">
        <Compass size="200" />
        <CompassLabel />
      </div>
    );
  }
}

export default App;
