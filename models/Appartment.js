const mongoose = require('mongoose');

const AppartmentSchema = mongoose.Schema({
    orientation: {
        type: String,
        required: true,
    },
    baseRent: {
        type: Number,
        required: true
    },
    deposit: {
        type: Number,
        required: true
    },
    qm: {
        type: Number,
        required: true
    },
    availableFrom: {
        type: Date,
        required: true
    },
    details: [{
        type: String
    }]
});

module.exports = mongoose.model('Appartment', AppartmentSchema);