import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  loggedIn: true,
  username: "Talia",
  menuVisible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {
        ...state,
        loggedIn: true,
        username: action.username
      };

    case actionTypes.LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        username: "Talia"
      };

    case actionTypes.SHOW_MENU:
      return {
        ...state,
        menuVisible: true
      };

    case actionTypes.HIDE_MENU:
      return {
        ...state,
        menuVisible: false
      };
    default:
      return state;
  }
};
