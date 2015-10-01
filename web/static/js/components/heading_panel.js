import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { getHeading } from '../reducers/compass';

class HeadingPanel extends Component {
  render() {
    const title = <h4>Heading</h4>;
    const { heading } = this.props;
    return (
      <Panel header={title}  bsStyle="info">
        <h3>{this.renderHeading(heading)}</h3>
      </Panel>
    );
  }

  renderHeading(heading) {
    if (heading) {
      return heading.toFixed(1);
    }

    return "---";
  }
}

function mapStateToProps(state) {
  return {
    heading: getHeading(state)
  };
}

export default connect(
  mapStateToProps,
  {}
)(HeadingPanel);
