import { types } from '../types/favoritesTypes';

export function addFavorites(item) {

  return {
      type: types.ADD_FAVORITE,
      payload: {...item[0]}
  }
}

export function deleteFavorites(id) {
  return {
      type: types.DELETE_FAVORITE,
      payload: id
  }
}

export function confirmDelete(confirm) {
  return {
    type: types.DELETE_CONFIRMATION,
    payload: confirm
  }
}

export function deleteRequest() {
  return {
    type: types.DELETE_REQUEST,
  }
}

export function cancelRequest() {
  return {
    type: types.CANCEL_REQUEST,
    payload: false
  }
}

export function setFlagFavorites(flagValue) {
  return {
    type: types.FLAG_FAVORITES,
    payload: flagValue
  }
}