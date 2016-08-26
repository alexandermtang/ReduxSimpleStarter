import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem, editItem } from '../actions/index';

class TodoListItem extends Component {
  startEdit(index) {
    this.props.startEdit(index);
  }

  stopEdit(item, index) {
    this.props.stopEdit(index);
    if (item === '') this.props.deleteItem(index);
  }

  onKeyDown(item, index, event) {
    if (event.keyCode === 13) {
      this.stopEdit(item, index);
    }
  }

  onDelete(index) {
    this.props.deleteItem(index);
  }

  onInputChange(index, event) {
    this.props.editItem(event.target.value, index);
  }

  render() {
    const { item, index, editing } = this.props
          , divStyle = {}
          , inputStyle = {};

    if (editing) {
      divStyle.display = "none";
    } else {
      inputStyle.display = "none";
    }

    return (
      <li className="list-group-item">
        <div
          onDoubleClick={() => this.startEdit(index)}
          style={divStyle}>
          {item}
          <span
            className="fa fa-trash-o fa-pull-right"
            onClick={() => this.onDelete(index)}>
          </span>
        </div>
        <input
          className="form-control"
          ref={(ref) => { if (ref !== null) ref.focus(); }}
          value={item}
          onBlur={() => this.stopEdit(item, index)}
          onKeyDown={(event) => this.onKeyDown(item, index, event)}
          onChange={(event) => this.onInputChange(index, event)}
          style={inputStyle}
        />
      </li>
    );
  }
}

export default connect(null, { deleteItem, editItem })(TodoListItem);
