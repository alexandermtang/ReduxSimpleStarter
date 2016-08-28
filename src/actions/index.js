import { v4 } from 'node-uuid';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const MARK_ALL = 'MARK_ALL';
export const CLEAR_COMPLETED  = 'CLEAR_COMPLETED';

export const addItem = (task) => {
  return {
    type: ADD_ITEM,
    item: {
      id: v4(),
      task: task,
      completed: false
    }
  };
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id: id
  };
}

export const editItem = (newTask, id) => {
  return {
    type: EDIT_ITEM,
    id: id,
    newTask: newTask
  };
}

export const toggleItem = (id) => {
  return {
    type: TOGGLE_ITEM,
    id: id
  };
}

export const markAll = (completed) => {
  return {
    type: MARK_ALL,
    completed: completed
  };
}

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  }
}
