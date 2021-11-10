
import { types } from '../types/castTypes'

const initialState = {
  pending: 'false',
  error: '',
  cast: []
}

export const castReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.FETCH_CAST_PENDING: 
      return {
        ...state,
        pending: true
            }
    case types.FETCH_CAST_SUCCESS:
      return { 
        ...state,
        pending: false,
        cast: [...action.payload]
            }
    case types.FETCH_CAST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
            }
    default :
      return state;
  }
}