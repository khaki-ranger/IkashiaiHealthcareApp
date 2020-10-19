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

/* Sidebar Actions */
export const setVisible = visible => {
  return {
    type: actionTypes.SET_SIDEBAR,
    payload: { visible: visible }
  }
};
