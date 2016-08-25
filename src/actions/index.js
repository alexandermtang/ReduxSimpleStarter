export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

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
