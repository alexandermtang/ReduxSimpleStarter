import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from '../actions/index';

export default function(state = [], action) {
  let newState = [ ...state ];

  switch(action.type) {
    case ADD_ITEM:
      return [ ...state, action.payload ];
    case DELETE_ITEM:
      newState.splice(action.payload, 1);
      return newState;
    case EDIT_ITEM:
      newState[action.payload.index] = action.payload.newItem;
      return newState;
    default:
      return state;
  }
}
