import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markAll } from '../actions/index';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
  }

  toggleAll(completedAll) {
    if (!completedAll) {
      this.props.markAll(true);
    } else {
      this.props.markAll(false);
    }
  }

  render() {
    const headerStyle = {};
    const completedAll = this.props.items.reduce((completedAll, item) => {
      return completedAll && item.completed;
    }, true);

    if (this.props.items.length === 0) {
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
            checked={completedAll ? "checked" : ""}
            onChange={() => this.toggleAll(completedAll)} />
          Mark all as completed
        </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, { markAll })(TodoHeader);
