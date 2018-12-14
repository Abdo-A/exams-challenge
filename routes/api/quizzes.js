const express = require("express");
const router = express.Router();

// Model
const Quiz = require("../../models/Quiz");

// @route        GET api/quiz
// @description  Get All quizzes
// @access       Public
router.get("/", (req, res) => {
  Quiz.find()
    .sort({ date: -1 })
    .then(quizzes => res.json(quizzes));
});

// @route        POST api/quiz
// @description  Post an quiz
// @access       Public
router.post("/", (req, res) => {
  const newQuiz = new Quiz({
    title: req.body.title,
    type: req.body.type,
    course: req.body.course,
    motivator: req.body.motivator,
    topic: req.body.topic,
    dueTo: req.body.dueTo
  });

  newQuiz.save().then(quiz => res.json(quiz));
});

module.exports = router;
