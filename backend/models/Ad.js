
const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  companyId: Number,
  primaryText: String,
  headline: String,
  description: String,
  CTA:String,
  imageUrl: String,
  name:String,
  url:String
});

module.exports = mongoose.model('Ad', adSchema);
