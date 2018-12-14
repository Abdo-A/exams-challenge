const express = require("express");
const router = express.Router();

// Model
const Announcement = require("../../models/Announcement");

// @route        GET api/announcement
// @description  Get All announcements
// @access       Public
router.get("/", (req, res) => {
  Announcement.find()
    .sort({ date: -1 })
    .then(announcements => res.json(announcements));
});

// @route        POST api/announcement
// @description  Post an announcement
// @access       Public
router.post("/", (req, res) => {
  const newAnnouncement = new Announcement({
    name: req.body.name,
    image: req.body.image,
    subject: req.body.subject,
    announcement: req.body.announcement
  });

  newAnnouncement.save().then(announcement => res.json(announcement));
});

module.exports = router;
