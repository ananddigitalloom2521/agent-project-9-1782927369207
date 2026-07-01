const mongoose = require('mongoose');
const propertySchema = new mongoose.Schema({
  address: String,
  type: String,
  rent: Number
});
module.exports = mongoose.model('Property', propertySchema);