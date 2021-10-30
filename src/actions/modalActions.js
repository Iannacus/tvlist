import { types } from '../types/modalTypes';

export function openModal(id) {

  return {
      type: types.OPEN_MODAL,
      payload: {
        id: id,
        open: true
      }
  }
}

export function closeModal() {

  return {
      type: types.CLOSE_MODAL,
      payload: {
        id: 0,
        open: false
      }
  }
}
