import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  renderItem(item, i) {
    return (
      <li key={i} className="list-group-item">{item}</li>
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

export default connect(mapStateToProps)(TodoList);
