import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/index';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  onClick(i) {
    this.props.deleteItem(i);
  }

  renderItem(item, i) {
    return (
      <li key={i} className="list-group-item">
        {item}
        <span
          className="fa fa-trash-o fa-pull-right"
          onClick={this.onClick.bind(this, i)} >
        </span>
      </li>
    );
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.items.map(this.renderItem.bind(this))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, { deleteItem })(TodoList);
