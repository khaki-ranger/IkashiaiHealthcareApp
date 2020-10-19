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

/* Sidebar Reducer */
const initialSidebarState = {
  visible: false
};

const sidebar_reducer = (state = initialSidebarState, action) => {
  switch(action.type) {
    case actionTypes.SET_SIDEBAR:
      return {
        ...state,
        visible: action.payload.visible
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  date: date_reducer,
  user: user_reducer,
  sidebar: sidebar_reducer
});

export default rootReducer;
