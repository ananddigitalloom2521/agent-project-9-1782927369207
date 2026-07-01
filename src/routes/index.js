const express = require('express');
const router = express.Router();
const properties = require('./properties');
const tenants = require('./tenants');
const leases = require('./leases');
router.use('/properties', properties);
router.use('/tenants', tenants);
router.use('/leases', leases);
module.exports = router;