const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  field: {
    type: String,
    required: false,
    unique: false,
  },
});

module.exports = mongoose.model("User", userSchema);
