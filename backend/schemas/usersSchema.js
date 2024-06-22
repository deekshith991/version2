
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: Number,
    },
    qualification: {
        type: String,
    },
    address: {
        type: String,
    },
    pincode: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        min: '2024-06-01'
    }
});

const COLLECTION_NAME = 'users';

module.exports = mongoose.model(COLLECTION_NAME, UserSchema);