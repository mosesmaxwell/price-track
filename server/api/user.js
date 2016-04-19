"use strict";
var mongoose = require("mongoose");
var userSchema = require("../models/user.js");

//Model name, schema, collection name
var User = mongoose.model('User', userSchema, 'users');

function createUser(req, res) {
    console.log('Create new user', req);
    var user = new User(req);
    user.save(function(error) {
      if (error) {
        console.log(error);
        return res.json({ user: user });
        process.exit(1);
      }
    });
}

// public api
module.exports = function (app) {
    app.post('/server/api/user', createUser);
}