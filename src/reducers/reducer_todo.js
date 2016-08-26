import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM,
         TOGGLE_ITEM, MARK_ALL, CLEAR_COMPLETED } from '../actions/index';

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
      return newState;
    case MARK_ALL:
      const completed = action.payload;
      newState.map((item) => {
        item.completed = completed;
        return item;
      });
      return newState;
    case CLEAR_COMPLETED:
      return newState.filter((item) => {
        return !item.completed;
      });
    default:
      return state;
  }
}
