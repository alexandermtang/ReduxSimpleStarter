import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './todo_list_item';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { editItem: null };
  }

  setEditItem(id) {
    this.setState({ editItem: id });
  }

  unsetEditItem(id) {
    if (this.state.editItem === id) {
      this.setState({ editItem: null });
    }
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.items.map((item, i) => {
          return (
            <TodoListItem
              key={item.id}
              { ...item }
              editing={this.state.editItem === item.id}
              startEdit={(id) => this.setEditItem(id)}
              stopEdit={(id) => this.unsetEditItem(id)} />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
}

export default connect(mapStateToProps)(TodoList);
