const mongoose = require('mongoose');

const AppartmentSchema = mongoose.Schema({
    orientation: {
        type: String,
        required: true,
        enum: ['south', 'west', 'north', 'east']
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
        required: true,
        default: Date.now
    },
    details: [{
        type: String
    }]
});

module.exports = mongoose.model('Appartment', AppartmentSchema);