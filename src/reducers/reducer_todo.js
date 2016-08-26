import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, TOGGLE_ITEM, TOGGLE_ALL } from '../actions/index';

export default function(state = [], action) {
  let newState = [ ...state ];
  let index;

  switch(action.type) {
    case ADD_ITEM:
      const item = action.payload;
      return [ ...state, item ];
    case DELETE_ITEM:
      index = action.payload;
      newState.splice(index, 1);
      return newState;
    case EDIT_ITEM:
      const newTask = action.payload.newTask;
      index = action.payload.index;
      newState[index].task = newTask;
      return newState;
    case TOGGLE_ITEM:
      index = action.payload;
      newState[index].completed = !newState[index].completed;
      // console.log(index, newState[index].completed);
      return newState;
    case TOGGLE_ALL:
      console.log("changeing all states to", action.payload);
      newState.map((item) => {
        item.completed = action.payload;
        return item;
      });
      return newState;
    default:
      return state;
  }
}
