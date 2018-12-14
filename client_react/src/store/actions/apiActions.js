import axios from "axios";

import * as actionTypes from "./actionTypes";
import * as apiEndpoints from "../../api/apiEndpoints";

export const getAnnouncements = () => dispatch => {
  axios
    .get(apiEndpoints.getAnnouncements)
    .then(res => {
      //console.log(res.data);
      dispatch({
        type: actionTypes.SET_ANNOUNCEMENTS,
        announcements: res.data
      });
    })
    .catch(err => console.log("can't fetch announcements", err));
};

export const getQuizzes = () => dispatch => {
  axios
    .get(apiEndpoints.getQuizzes)
    .then(res => {
      //console.log(res.data);
      dispatch({
        type: actionTypes.SET_QUIZZES,
        quizzes: res.data
      });
    })
    .catch(err => console.log("can't fetch quizzes", err));
};
