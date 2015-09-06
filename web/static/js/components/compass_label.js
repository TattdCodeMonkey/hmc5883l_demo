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
      <div>
        <h2>Heading</h2>
        <h3>{this.renderHeading()}</h3>
      </div>
    );
  }

  renderHeading() {
    if (this.state.degrees) {
      return this.state.degrees.toString();
    }

    return "---";
  }
}

export default CompassLabel;
