const mongoose = require("mongoose");

const beachSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  image1: {
    type: String
  },
  image2: {
    type: String
  }
});

const beaches = new mongoose.model("beaches", beachSchema);

module.exports = beaches;
