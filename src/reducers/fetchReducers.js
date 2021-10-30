
import { types } from '../types/fetchTypes'

const initialState = {
  pending: 'false',
  error: '',
  tvShows: []
}

export const fetchReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.FETCH_SHOWS_PENDING: 
      return {
        ...state,
        pending: true
            }
    case types.FETCH_SHOWS_SUCCESS:
      return { 
        ...state,
        pending: false,
        tvShows: [...action.payload]
            }
    case types.FETCH_SHOWS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
            }
    default :
      return state;
  }
}
