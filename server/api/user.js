"use strict";
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
var errorHelper = require('mongoose-error-helper').errorHelper;
var userSchema = require("../models/user.js");

function createUser(req, res, next) {
  
  console.log('Create user get called!');
  var userData = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
  };  
  
  //Model name, schema, collection name
  var User = mongoose.model('User', userSchema, 'users');
  var user = new User();
  user.save(userData, function(error) {
    console.log('save user get called!');
    if (error) {
      return errorHelper(error, next);
    }
    console.log('user.save data success!');
    return res.json({ user: user });
  });
}

function getUser(req, res) {
  res.send('Get method called!');
}

// public api
module.exports = function (app) {
    app.use(bodyparser.json());
    app.post('/server/api/user', createUser);
    app.get('/server/api/user', getUser);
}