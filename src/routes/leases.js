const express = require('express');
const router = express.Router();
const Lease = require('../models/Lease');
router.get('/', async (req, res) => {
  try {
    const leases = await Lease.find();
    res.json(leases);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching leases' });
  }
});
router.post('/', async (req, res) => {
  try {
    const lease = new Lease(req.body);
    await lease.save();
    res.json(lease);
  } catch (err) {
    res.status(500).json({ message: 'Error creating lease' });
  }
});
module.exports = router;