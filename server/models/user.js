"use strict";
var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true
    },
    password: {
        type: String,
        lowercase: true
    },
    email: {
        type: String,
        lowercase: true,
        match: /.+@.+\..+/
    }
});