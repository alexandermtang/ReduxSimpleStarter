import { ADD_ITEM } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}
