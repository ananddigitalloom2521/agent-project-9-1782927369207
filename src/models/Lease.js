const mongoose = require('mongoose');
const leaseSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  rent: Number
});
module.exports = mongoose.model('Lease', leaseSchema);