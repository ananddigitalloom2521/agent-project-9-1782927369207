const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');
router.get('/', async (req, res) => {
  try {
    const tenants = await Tenant.find();
    res.json(tenants);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tenants' });
  }
});
router.post('/', async (req, res) => {
  try {
    const tenant = new Tenant(req.body);
    await tenant.save();
    res.json(tenant);
  } catch (err) {
    res.status(500).json({ message: 'Error creating tenant' });
  }
});
module.exports = router;