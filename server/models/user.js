"use strict";
var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /.+@.+\..+/
    }
});