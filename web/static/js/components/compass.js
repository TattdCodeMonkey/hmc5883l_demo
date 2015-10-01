import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getHeading } from '../reducers/compass';

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
  }

  componentDidMount() {
    this._initCanvas();
  }

  componentWillUnmount() {
    //TODO: destroy canvas?
  }

  render() {
    this._drawCanvas();
    return <canvas id="compass" width={this.props.size} height={this.props.size}></canvas>;
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

    if (this.props.degrees) {
      //draw needle
      ctx.translate(100, 100);

      ctx.rotate(this.props.degrees * (Math.PI / 180));

      ctx.drawImage(this.state.needleImg, -100, -100);

      ctx.restore();
    }
  }
}

function mapStateToProps(state) {
  return {
    degrees: getHeading(state)
  };
}

export default connect(
  mapStateToProps,
  {}
)(Compass);
