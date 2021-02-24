const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("views"));

const uri = process.env.URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("We're Connected to the MongoDB Database!");
});

const commentsRouter = require("./routes/comments.js");

app.use("/comments", commentsRouter);

app.listen(port, () => {
  console.log("App running on port " + port);
});

