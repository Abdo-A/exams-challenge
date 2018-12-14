const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: {
    type: String
  },
  type: {
    type: String
  },
  course: {
    type: String
  },
  motivator: {
    type: String
  },
  topic: {
    type: String
  },
  dueTo: {
    type: Date,
    default: Date.now
  }
});

module.exports = Quiz = mongoose.model("quiz", QuizSchema);
