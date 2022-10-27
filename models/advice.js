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
  professional_experience: {
    type: Boolean,
    default: false,
    required: true,
  },
  advice: {
    type: String,
    required: true,
  },

  timestamps: true,
});

module.exports = mongoose.model("Advice", adviceSchema);
