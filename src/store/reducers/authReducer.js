import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  loggedIn: false,
  username: "Talia"
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
    default:
      return state;
  }
};
