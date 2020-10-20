import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

/* Date Reducer */
const initialDateState = {
  currentDate: null,
};

const date_reducer = (state = initialDateState, action) => {
  switch(action.type) {
    case actionTypes.SET_CURRENT_DATETIME :
      return {
        ...state,
        currentDate: action.payload.currentDate,
      }
    default:
      return state;
  }
};

/* User Reducer */
const initialUserState = {
  currentUser: null,
  isLoading: true
};

const user_reducer = (state = initialUserState, action) => {
  switch(action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      }
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

/* tab Reducer */
const initialTabState = {
  selected: 'input'
};

const tab_reducer = (state = initialTabState, action) => {
  switch(action.type) {
    case actionTypes.SELECT_TAB :
      return {
        ...state,
        selected: action.payload.selected
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  date: date_reducer,
  user: user_reducer,
  tab: tab_reducer
});

export default rootReducer;
