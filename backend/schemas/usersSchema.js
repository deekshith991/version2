
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    role: {
        type: String,
        default: "jobSeeker",
        enum: ['jobSeeker', 'Employer']

    },
    companyName: {
        type: String,
    },
    branch: {
        type: String,
    },
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
    appliedTo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application' // Reference to another Mongoose model if applications have more details
    }],
    jobsIssued: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job' // Reference to another Mongoose model if jobs issued have more details
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        min: new Date('2024-06-01')
    }
});

UserSchema.pre('save', function (next) {
    if (this.role === 'jobSeeker' && !Array.isArray(this.applications)) {
        this.applications = []; // Initialize applications array for job seekers
    } else if (this.role === 'Employer' && !Array.isArray(this.jobsIssued)) {
        this.jobsIssued = []; // Initialize jobsIssued array for employers
    }
    next();
});

const COLLECTION_NAME = 'users';

module.exports = mongoose.model(COLLECTION_NAME, UserSchema);