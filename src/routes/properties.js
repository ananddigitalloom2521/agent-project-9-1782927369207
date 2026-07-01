const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching properties' });
  }
});
router.post('/', async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: 'Error creating property' });
  }
});
module.exports = router;