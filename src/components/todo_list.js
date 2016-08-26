import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './todo_list_item';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { editItem: null };
  }

  setEditItem(index) {
    this.setState({ editItem: index });
  }

  unsetEditItem(index) {
    if (this.state.editItem === index) {
      this.setState({ editItem: null });
    }
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.items.map((item, index) => {
          return (
            <TodoListItem
              key={index}
              item={item}
              index={index}
              editing={this.state.editItem === index}
              startEdit={(index) => this.setEditItem(index)}
              stopEdit={(index) => this.unsetEditItem(index)} />
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps)(TodoList);
