import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

/* Date Reducer */
const initialDateState = {
  todaysDate: null,
  currentDate: null
};

const date_reducer = (state = initialDateState, action) => {
  switch(action.type) {
    case actionTypes.SET_TODAY_DATETIME :
      return {
        ...state,
        todaysDate: action.payload.todaysDate,
      }
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

/* Tab Reducer */
const initialTabState = {
  selected: 'input'
};

const tab_reducer = (state = initialTabState, action) => {
  switch(action.type) {
    case actionTypes.SELECT_TAB:
      return {
        ...state,
        selected: action.payload.selected
      }
    default:
      return state;
  }
};

/* Record Reducer */
const initialRecordState = {
  records: new Map(),
  isLoading: true
};

const record_reducer = (state = initialRecordState, action) => {
  switch(action.type) {
    case actionTypes.SET_RECORDS:
      return {
        ...state,
        isLoading: false,
        records: action.payload.records
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  date: date_reducer,
  user: user_reducer,
  tab: tab_reducer,
  record: record_reducer
});

export default rootReducer;
