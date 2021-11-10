
import { types } from '../types/favoritesTypes'

const initialState = {
  showList: [],
  request: false,
  confirmation: false,
  flag: false
};

export const favoriteReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.FLAG_FAVORITES:
      return {
        ...state,
        flag: action.payload
      }

    case types.ADD_FAVORITE: 
      return {...state,
        showList: [...state.showList, action.payload]
      }

    case types.DELETE_REQUEST:
      return {
        ...state,
        request: true
      }

    case types.CANCEL_REQUEST:
        return {
          ...state,
          request: false
        }

    case types.DELETE_CONFIRMATION:
      return {
        ...state,
        confirmation: action.payload
      }

    case types.DELETE_FAVORITE:
      const stateCopy = [...state.showList];
      const index = stateCopy.findIndex(item => item.id === action.payload);

      if(index >= 0){
        const deleted = stateCopy.splice(index, 1);
        console.log(deleted);
      }
      return {...state,
         showList: [...stateCopy],
         request: false,
        }

    default :
      return state;
  }
}