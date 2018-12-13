import * as actionTypes from "./actionTypes";

export const logIn = username => {
  return {
    type: actionTypes.LOG_IN,
    username: username
  };
};

export const logOut = () => {
  return {
    type: actionTypes.LOG_OUT
  };
};
