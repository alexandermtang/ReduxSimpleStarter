import { v4 } from 'node-uuid';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const MARK_ALL = 'MARK_ALL';
export const CLEAR_COMPLETED  = 'CLEAR_COMPLETED';

export function addItem(task) {
  return {
    type: ADD_ITEM,
    item: {
      id: v4(),
      task: task,
      completed: false
    }
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id: id
  };
}

export function editItem(newTask, id) {
  return {
    type: EDIT_ITEM,
    id: id,
    newTask: newTask
  };
}

export function toggleItem(id) {
  return {
    type: TOGGLE_ITEM,
    id: id
  };
}

export function markAll(completed) {
  return {
    type: MARK_ALL,
    completed: completed
  };
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  }
}
