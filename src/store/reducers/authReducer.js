import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  loggedIn: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {
        ...state,
        loggedIn: true
      };

    case actionTypes.LOG_OUT:
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
};
