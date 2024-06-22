
const mongoose = require('mongoose');

const CompaniesSchema = mongoose.Schema({

    companyName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    branch: {
        type: String,
    },
    address: {
        type: String,
    },
    pincode: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        min: '2024-06-01'
    }

});


const COLLECTION_NAME = 'companies';
module.exports = mongoose.model(COLLECTION_NAME, CompaniesSchema); 