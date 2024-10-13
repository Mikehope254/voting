const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  option: String,
  votes: {
    type: Number,
    default: 0,
  },
});
const pollSchema = new mongoose.Schema({
  question: String,
  option: [{ optionSchema }],
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Poll", pollSchema);
