import React, {Component} from 'react';
import CompassStore from '../stores/compass';

class CompassLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degrees: null
    }

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CompassStore.listen(this.onChange);
  }

  componentWillUnmount() {
    CompassStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">Heading</h4>
        </div>
        <div className="panel-body">
          <h3>{this.renderHeading()}</h3>
        </div>
      </div>
    );
  }

  renderHeading() {
    if (this.state.degrees) {
      return this.state.degrees.toFixed(1);
    }

    return "---";
  }
}

export default CompassLabel;
