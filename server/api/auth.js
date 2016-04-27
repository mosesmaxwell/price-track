"use strict";
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
var status = require('http-status');

var userSchema = require("../models/user.js");

//check user login
function checkLogin(req, res) {
  //Model name, schema, collection name
  var User = mongoose.model('User', userSchema, 'users');
  User.findOne({ username: req.body.username, password: req.body.password }, function(error, user) {
    if (error) {
      return res.
        status(status.INTERNAL_SERVER_ERROR).
        json({ error: error.toString() });
    }
    if (!user) {
      return res.
        status(status.NOT_FOUND).
        json({ error: 'Not found' });
    }
    res.json({ user: user });
  });
}

//user logout
function logout(req, res) {
  
}

// public api
module.exports = function (app) {
    app.use(bodyparser.json());
    app.post('/api/auth', checkLogin);
}