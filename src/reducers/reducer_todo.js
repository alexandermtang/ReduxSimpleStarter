import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM,
         TOGGLE_ITEM, MARK_ALL, CLEAR_COMPLETED } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      return [ ...state, action.item ];
    case DELETE_ITEM:
      return state.filter((item) => {
        return item.id !== action.id;
      });
    case EDIT_ITEM:
      return state.map((item) => {
        if (item.id === action.id) {
          item.task = action.newTask;
        }
        return item;
      });
    case TOGGLE_ITEM:
      return state.map((item) => {
        if (item.id === action.id) {
          item.completed = !item.completed;
        }
        return item;
      });
    case MARK_ALL:
      return state.map((item) => {
        item.completed = action.completed;
        return item;
      });
    case CLEAR_COMPLETED:
      return state.filter((item) => {
        return !item.completed;
      });
    default:
      return state;
  }
}
