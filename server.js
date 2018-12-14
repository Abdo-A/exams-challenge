const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const announcements = require("./routes/api/announcements");
const quizzes = require("./routes/api/quizzes");

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//DB Config
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log("Error connecting to db..", err));

//Use Routes
app.use("/api/announcement", announcements);
app.use("/api/quiz", quizzes);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client_react/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client_react", "build", "index.html")
    );
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
