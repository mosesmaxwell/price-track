"use strict";
var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    profile: {
        name: {
            type: String
        },
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
        },
        picture: {
            type: String,
            match: /^http:\/\//i
        }
    },
    login: {
        loggedInCount: {
            type: Number,
            default: 0
        }
    }
});