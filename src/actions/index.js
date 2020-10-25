import * as actionTypes from './types';


/* Date Actions */
export const setCurrentDate = currentDate => {
  return {
    type: actionTypes.SET_CURRENT_DATETIME,
    payload: {
      currentDate: currentDate
    }
  }
};

/* User Actions */
export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  }
};

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  }
};

/* Tab Actions */
export const selectTab = selected => {
  return {
    type: actionTypes.SELECT_TAB,
    payload: { selected: selected }
  }
};

/* Record Actions */
export const setRecords = records => {
  return {
    type: actionTypes.SET_RECORDS,
    payload: { records: records }
  }
};
