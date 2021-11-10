import { types } from '../types/castTypes';

function fetchCastPending() {
  return {
      type: types.FETCH_CAST_PENDING
  }
}

export function fetchCastSuccess(showList) {
  return {
      type: types.FETCH_CAST_SUCCESS,
      payload: showList
  }
}

function fetchCastError(error) {
  return {
      type: types.FETCH_CAST_ERROR,
      payload: error
  }
}

export function  getCast(url) {
  return dispatch => {
      dispatch(fetchCastPending());
      fetch(url)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(fetchCastSuccess(res));
          return res;
      })
      .catch(error => {
          dispatch(fetchCastError(error));
      })
  }
}