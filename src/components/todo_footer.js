import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoFooter extends Component {

  render() {
    const { items } = this.props;
    const numItems = items.reduce((counter, item) => {
      return !item.completed ?  counter + 1 : counter
    }, 0);

    if (items.length === 0) {
      return <div></div>;
    }

    return (
      <div className="list-group-item">
        {numItems} item{ numItems === 1 ? "" : "s" } left
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps)(TodoFooter);
