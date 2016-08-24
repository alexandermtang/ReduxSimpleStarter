import { combineReducers } from 'redux';
import TodoReducer from './reducer_todo';

const rootReducer = combineReducers({
  items: TodoReducer
});

export default rootReducer;
