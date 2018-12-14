import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  announcements: [],
  quizzes: [],
  useFakeServices: false //When useFakeServices is false, the node js api is called
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.announcements
      };

    case actionTypes.SET_QUIZZES:
      return {
        ...state,
        quizzes: action.quizzes
      };
    default:
      return state;
  }
};
