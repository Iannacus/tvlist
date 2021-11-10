import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {fetchReducer} from '../reducers/fetchReducers';
import { favoriteReducer } from '../reducers/favoritesRedcuers';
import { modalReducer } from '../reducers/modalReducer';
import { castReducer } from '../reducers/castReducers';


const reducers = combineReducers({
  fetchReducer,
  favoriteReducer,
  modalReducer,
  castReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers, 
  composeEnhancers(
    applyMiddleware( thunk )
  )
);