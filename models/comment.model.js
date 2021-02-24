//psst MasterMind was here coding some databases!
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commentname: String,
  unique: false
});

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
