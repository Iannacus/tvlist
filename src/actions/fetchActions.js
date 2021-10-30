import { types } from '../types/fetchTypes';

function fetchShowsPending() {
  return {
      type: types.FETCH_SHOWS_PENDING
  }
}

export function fetchShowsSuccess(showList) {
  return {
      type: types.FETCH_SHOWS_SUCCESS,
      payload: showList
  }
}

function fetchShowsError(error) {
  return {
      type: types.FETCH_SHOWS_ERROR,
      payload: error
  }
}

export function fetchMovies(url) {
  return dispatch => {
      dispatch(fetchShowsPending());
      fetch(url)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(fetchShowsSuccess(res));
          
          return res;
      })
      .catch(error => {
          dispatch(fetchShowsError(error));
      })
  }
}

export function fetchCustomMovies(url) {
  return dispatch => {
      dispatch(fetchShowsPending());
      fetch(url)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          const payload = res.map(element => {
            return(
              element.show
            )
          })
          dispatch(fetchShowsSuccess(payload));
          
          return res;
      })
      .catch(error => {
          dispatch(fetchShowsError(error));
      })
  }
}