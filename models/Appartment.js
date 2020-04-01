/*
    STATE
    state = [
        appartments: {
            id: 1,
            location: Köln,
            price: 34€,
            qm: 50,
            orientation: south,
            details: {
                description: Something,
                balcony: yes
            }
        },
    ]

*/

const mongoose = require('mongoose');

const AppartmentSchema = mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    pricePerMonth: {
        type: Number,
        required: true
    },
    qm: {
        type: Number,
        required: true
    },
    orientation: {
        type: String,
        required: true
    },
    details: {
        facilities: {
            type: String
        }
    }
});

module.exports = mongoose.model('Appartment', AppartmentSchema);