import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
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
    let title = <h4>Heading</h4>;
    return (
      <Panel header={title}  bsStyle="info">
        <h3>{this.renderHeading()}</h3>
      </Panel>
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
