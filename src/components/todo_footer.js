import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCompleted } from '../actions/index';

class TodoFooter extends Component {
  render() {
    const { items } = this.props;
    const numItemsLeft = items.reduce((counter, item) => {
      return !item.completed ?  counter + 1 : counter
    }, 0);
    const numItemsCompleted = items.length - numItemsLeft;
    const clearCompletedStyle = {};

    if (items.length === 0) {
      return <div></div>;
    }

    if (numItemsCompleted === 0) {
      clearCompletedStyle.display = "none";
    }

    return (
      <div className="list-group-item">
        <b>{numItemsLeft}</b> item{ numItemsLeft === 1 ? "" : "s" } left
        <span
          className="clear-completed pull-right"
          style={clearCompletedStyle}
          onClick={this.props.clearCompleted}>Clear completed</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
}

export default connect(mapStateToProps, { clearCompleted })(TodoFooter);
