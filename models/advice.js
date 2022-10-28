const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adviceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  advice: {
    type: String,
    required: true,
  },
  profExp: {
    type: Boolean,
    default: false,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Advice", adviceSchema);
