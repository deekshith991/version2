
const mongoose = require('mongoose');

const Applications = new mongoose.Schema({
    applicantId: {
        type: String,
    },
    appliedAt: {
        type: Date,
        default: Date.now,
        min: '2024-06-01'
    }
})

const JobSchema = new mongoose.Schema({

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
        applicantId: {
            type: String,
        },
        appliedAt: {
            type: Date,
            default: Date.now,
            min: '2024-06-01'
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        min: '2024-06-01'
    }
});

const COLLECTION_NAME = 'jobs';

module.exports = mongoose.model(COLLECTION_NAME, JobSchema);