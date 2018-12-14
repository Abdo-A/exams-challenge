const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  subject: {
    type: String
  },
  announcement: {
    type: String
  }
});

module.exports = Announcement = mongoose.model(
  "announcement",
  AnnouncementSchema
);
