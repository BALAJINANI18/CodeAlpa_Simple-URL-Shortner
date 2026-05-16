const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({

    originalUrl: {
        type: String,
        required: true
    },

    shortCode: {
        type: String,
        required: true
    },

    clicks: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    expiresAt: {
        type: Date,
        default: Date.now,
        expires: 86400
    }

});

module.exports = mongoose.model("Url", UrlSchema);