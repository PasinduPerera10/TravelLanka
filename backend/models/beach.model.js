const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beachSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  province: { type: String, required: true },
  district: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: String, required: true },
});

const Beach = mongoose.model('Beach', beachSchema);

module.exports = Beach;