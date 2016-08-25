import { ADD_ITEM } from '../actions/index';
import { DELETE_ITEM } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      return [ ...state, action.payload ];
    case DELETE_ITEM:
      var newArr = [ ...state ];
      newArr.splice(action.payload, 1);
      return newArr;
    default:
      return state;
  }
}
