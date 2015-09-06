import React, { Component } from 'react';
import CompassLabel from './components/compass_label';
import CompassPanel from './components/compass_panel';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <CompassLabel />
          <CompassPanel />
        </div>
        <div className="col-sm-4">

        </div>
      </div>
    );
  }
}

export default App;
