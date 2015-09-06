import React, {Component} from 'react';
import CompassStore from '../stores/compass';

class Compass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      degrees: null,
      needleImg: null,
      compassImg: null,
      ctx: null
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this._initCanvas();
    CompassStore.listen(this.onChange);
  }

  componentWillUnmount() {
    CompassStore.unlisten(this.onChange);
  }

  shouldComponentUpdate() {
    //Rendering is handled onChange by calling _drawCanvas
    return false;
  }

  render() {
    return <canvas id="compass" width={this.props.size} height={this.props.size}></canvas>;
  }

  onChange(state) {
    this.setState(state);
    this._drawCanvas();
  }

  _initCanvas() {
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
        this._drawCanvas();
      };
      stateUpdates.compassImg.src = '/images/compass.png';

      this.setState(stateUpdates);
    }
  }

  _clearCanvas() {
    if (!this.state.loaded) {
      return;
    }

    this.state.ctx.clearRect(0, 0, this.props.size, this.props.size);
  }

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
}

export default Compass;
