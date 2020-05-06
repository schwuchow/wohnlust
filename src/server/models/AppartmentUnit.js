const mongoose = require('mongoose');
const Location = require('./Location');
const Appartment = require('./Appartment');

const AppartmentUnitSchema = mongoose.Schema({
    location: Location.schema,
    appartments: [Appartment.schema],
    yearOFConstruction: {
        type: Number,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    services: [{
        type: String
    }]
});

module.exports = mongoose.model('AppartmentUnit', AppartmentUnitSchema);