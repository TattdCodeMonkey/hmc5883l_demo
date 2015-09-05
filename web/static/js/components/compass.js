import React from 'react';

const Compass = React.createClass({
  getInitialState() {
    return {
      loaded: false,
      degrees: null,
      needleImg: null,
      compassImg: null,
      ctx: null
    };
  },

  componentDidMount() {
    this._initCanvas();
  },

  shouldComponentUpdate() {
    return false;
  },

  render() {
    return <canvas id="compass" width={this.props.size} height={this.props.size}></canvas>;
  },

  _initCanvas() {
    console.log('init compass canvas');
    let canvas = document.getElementById('compass');

    let ctx = canvas.getContext('2d');
    if (ctx) {
      let stateUpdates = {};
      stateUpdates.ctx = ctx;

      //load needle
      stateUpdates.needleImg = new Image();
      stateUpdates.needleImg.src = '/images/needle.png';

      //load Compass
      stateUpdates.compassImg = new Image();
      stateUpdates.compassImg.onload = () => {
        this.setState({loaded: true});
        setTimeout(this._drawCanvas, 1);
      };
      stateUpdates.compassImg.src = '/images/compass.png';

      this.setState(stateUpdates);
    }
  },

  _clearCanvas() {
    if (!this.state.loaded) {
      return;
    }

    this.state.ctx.clearRect(0, 0, this.props.size, this.props.size);
  },

  _drawCanvas() {
    if (!this.state.loaded) {
      return;
    }

    this._clearCanvas();
    let ctx = this.state.ctx;

    ctx.drawImage(this.state.compassImg, 0, 0);
    ctx.save();

    if (this.state.degrees) {
      //draw needle
      ctx.translate(100, 100);

      ctx.rotate(this.state.degrees * (Math.PI / 180));

      ctx.drawImage(this.state.needleImg, -100, -100);

      ctx.restore();
    }
  }
});

export default Compass;
