const express = require('express');
const router = express.Router();
const AppartmentUnit = require('../models/AppartmentUnit');

router.get('/', async(req, res) => {
    try {
        const appartmentUnit = await AppartmentUnit.find();
        res.json(appartmentUnit);
    } catch(error) {
        res.json({ message: error });
    }
});

router.post('/', async(req, res) => {
    const appartmentUnit = new AppartmentUnit(req.body);

    try {
        const savedAppartmentUnit = await appartmentUnit.save();
        res.json(savedAppartmentUnit);
    } catch(error) {
        res.json({ message: error });
    }
});

module.exports = router;