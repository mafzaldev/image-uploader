const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imgName: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", imageSchema);
