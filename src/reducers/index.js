import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

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

const initialSidebarState = {
  visible: false
};

/* Sidebar Actions */
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
  user: user_reducer,
  sidebar: sidebar_reducer
});

export default rootReducer;
