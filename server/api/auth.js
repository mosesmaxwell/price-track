"use strict";
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
var status = require('http-status');

var userSchema = require("../models/user.js");

//new user signup
function loginUser(req, res, next) {

  //Model name, schema, collection name
  var User = mongoose.model('User', userSchema, 'users');
  User.findOne({ username: req.body.username, password: req.body.password }, function(error, user) {
    if (error) {
      console.log('user auth error!', error);
      return res.
      status(status.BAD_REQUEST).
      json({ error: error });
    }
    console.log('user auth success!');
    return res.json({ user: user });
  });
}

function logoutUser(req, res, next) {
}

// public api
module.exports = function (app) {
    app.use(bodyparser.json());
    app.post('/api/auth/login', loginUser);
    app.get('/api/auth/logout', logoutUser);
}