import React from 'react';
import Compass from '../components/compass';

const App = React.createClass({
  render() {
    return (
      <div className="compass">
        <Compass size="200" />
      </div>
    );
  }
});

export default App;
