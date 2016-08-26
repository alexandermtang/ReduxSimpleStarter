import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';

class TodoBar extends Component {
  constructor(props) {
    super(props);

    this.state = { item: '' };
  }

  onInputChange(event) {
    this.setState({ item: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.addItem(this.state.item);
    this.setState({ item: '' });
  }

  render() {
    return (
      <div className="todobar">
        <h3>Todo List</h3>
        <form onSubmit={(event) => this.onFormSubmit(event)} className="input-group">
          <input
            className="form-control"
            placeholder="What do you need to do today?"
            value={this.state.item}
            onChange={(event) => this.onInputChange(event)} />
          <span className="input-group-btn">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.state.item}>
              Add
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default connect(null, { addItem })(TodoBar);
