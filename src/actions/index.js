import * as actionTypes from './types';

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
