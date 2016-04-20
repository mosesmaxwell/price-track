"use strict";
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
var errorHelper = require('mongoose-error-helper').errorHelper;
var userSchema = require("../models/user.js");

function createUser(req, res, next) {
  var userData = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
  };  
  //Model name, schema, collection name
  var User = mongoose.model('User', userSchema, 'users');
  var user = new User(userData);
  user.save(function(error, user) {
    if (error) {
      console.log('save.user error!', error);
      return res.json({ error: error });
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