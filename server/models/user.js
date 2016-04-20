"use strict";
var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
});