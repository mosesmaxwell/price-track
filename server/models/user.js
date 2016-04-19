"use strict";
var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    profile: {
        name: {
            type: String,
            required: false,
            default: 'Firstname'
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
            required: false,
            match: /^http:\/\//i
        }
    },
    login: {
        loggedInCount: {
            type: Number,
            required: false,
            default: 0
        }
    }
});