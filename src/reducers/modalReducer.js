
import { types } from '../types/modalTypes'

const initialState = {
  open: false,
  modalId: 0
}

export const modalReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.OPEN_MODAL:
      return {
        ...state,
        open: action.payload.open,
        modalId: action.payload.id
            }
    case types.CLOSE_MODAL: 
      return {
        ...state,
        open: action.payload.open,
        modalId: action.payload.id
            }
    default :
      return state;
  }
}