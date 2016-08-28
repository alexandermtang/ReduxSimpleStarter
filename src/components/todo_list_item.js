import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem, editItem, toggleItem } from '../actions/index';

class TodoListItem extends Component {
  startEdit(id) {
    this.props.startEdit(id);
  }

  stopEdit(task, id) {
    this.props.stopEdit(id);
    if (task === "") this.props.deleteItem(id);
  }

  onKeyDown(task, id, event) {
    if (event.keyCode === 13) {
      this.stopEdit(task, id);
    }
  }

  onDelete(id) {
    this.props.deleteItem(id);
  }

  onInputChange(id, event) {
    this.props.editItem(event.target.value, id);
  }

  toggleItemComplete(id) {
    this.props.toggleItem(id);
  }

  render() {
    const { id, task, completed, editing } = this.props
          , divStyle = {}
          , inputStyle = {}
          , taskStyle = {};

    if (editing) {
      divStyle.display = "none";
    } else {
      inputStyle.display = "none";
    }

    if (completed) {
      taskStyle.textDecoration = "line-through";
    }

    return (
      <li className="list-group-item">
        <div
          onDoubleClick={() => this.startEdit(id)}
          style={divStyle}>
          <label className="form-check-label" style={taskStyle}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={completed ? "checked" : ""}
              onChange={() => this.toggleItemComplete(id)} />
            {task}
          </label>
          <span
            className="fa fa-trash-o fa-pull-right"
            onClick={() => this.onDelete(id)}>
          </span>
        </div>
        <input
          className="form-control"
          ref={(ref) => { if (ref !== null) ref.focus(); }}
          value={task}
          onBlur={() => this.stopEdit(task, id)}
          onKeyDown={(event) => this.onKeyDown(task, id, event)}
          onChange={(event) => this.onInputChange(id, event)}
          style={inputStyle}
        />
      </li>
    );
  }
}

export default connect(null, { deleteItem, editItem, toggleItem })(TodoListItem);
