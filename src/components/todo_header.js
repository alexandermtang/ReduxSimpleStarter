import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleAll } from '../actions/index';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { completedAll: false };
  }

  toggleAll() {
    this.props.toggleAll(!this.state.completedAll);
    this.setState({ completedAll: !this.state.completedAll });
  }

  render() {
    const headerStyle = {};

    if (this.props.numItems === 0) {
      headerStyle.display = "none";
    }

    return (
      <div
        className="list-group-item"
        style={headerStyle}>
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => this.toggleAll()} />
          Mark all as completed
        </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { numItems: state.items.length };
}

export default connect(mapStateToProps, { toggleAll })(TodoHeader);
