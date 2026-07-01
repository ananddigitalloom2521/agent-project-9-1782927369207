const mongoose = require('mongoose');
const Property = require('./Property');
const Tenant = require('./Tenant');
const Lease = require('./Lease');
module.exports = { Property, Tenant, Lease };