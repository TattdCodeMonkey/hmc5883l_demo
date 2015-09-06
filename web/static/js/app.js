import React, { Component } from 'react';
import Compass from './components/compass';

class App extends Component {
  render() {
    return (
      <div className="compass">
        <Compass size="200" />
      </div>
    );
  }
}

export default App;
