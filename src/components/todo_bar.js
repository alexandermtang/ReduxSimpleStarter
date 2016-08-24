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
        <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
          <input
            className="form-control"
            value={this.state.item}
            onChange={this.onInputChange.bind(this)} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Add</button>
          </span>
        </form>
      </div>
    );
  }
}

export default connect(null, { addItem })(TodoBar);
