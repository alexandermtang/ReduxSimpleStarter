export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    payload: index
  };
}

export function editItem(item, index) {
  return {
    type: EDIT_ITEM,
    payload: {
      newItem: item,
      index: index
    }
  }
}
