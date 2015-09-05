import React from 'react';

const Compass = React.createClass({

  shouldComponentUpdate() {
    return false;
  },

  render() {
    return <canvas id="compass" width={this.props.size} height={this.props.size}></canvas>;
  }
});

export default Compass;
