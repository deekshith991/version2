
const mongoose = require('mongoose');

const applicationsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    appliedAt: {
        type: Date,
        default: Date.now,
        min: '2024-06-01'
    }
});

const Applications = mongoose.model('Applications', applicationsSchema);

const JobSchema = new mongoose.Schema({
    // id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user',
    // },
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    company_Name: {
        type: String,
    },
    position: {
        type: String,
    },
    workType: {
        type: String,
    },
    workLocation: {
        type: String,
    },
    salary: {
        type: Number,
    },
    email: {
        type: String,
    },
    appliedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applications'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        min: '2024-06-01'
    }
});

const COLLECTION_NAME = 'jobs';

module.exports = mongoose.model(COLLECTION_NAME, JobSchema);