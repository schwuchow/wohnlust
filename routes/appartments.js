const express = require('express');
const router = express.Router();
const Appartment = require('../models/Appartment');

router.get('/', async(req, res) => {
    try {
        const appartments = await Appartment.find();
        res.json(appartments);
    } catch(error) {
        res.json({ message: error });
    }
});

router.post('/', async(req, res) => {
    const appartment = new Appartment({
        location: req.body.location,
        pricePerMonth: req.body.pricePerMonth,
        qm: req.body.qm,
        orientation: req.body.orientation,
        details: {
            facilities: req.body.details.facilities
        }
    });

    try {
        const savedAppartment = await appartment.save();
        res.json(savedAppartment);
    } catch(error) {
        res.json({ message: error });
    }
});

module.exports = router;