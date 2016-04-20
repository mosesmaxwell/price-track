"use strict";
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
var errorHelper = require('mongoose-error-helper').errorHelper;
var userSchema = require("../models/user.js");

function createUser(req, res, next) {
  
  console.log('Request DataView: ', req.body);
  
  var userData = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
  };  
  console.log('Formatted User Data: ', userData);
  //Model name, schema, collection name
  var User = mongoose.model('User', userSchema, 'users');

  var user = new User();
  console.log('user model created ', user);
    user.save(userData, function(error) {
      console.log('user.save data called', error);
      if (error) {
        return errorHelper(error, next);
      }
    });
}

function getUser(req, res) {
  res.send('reachable to api user inside the server');
}

// public api
module.exports = function (app) {
  
    app.use(bodyparser.json());
  
    app.post('/server/api/user', createUser);
    app.get('/server/api/user', getUser);
    /*
    var User = mongoose.model('User', userSchema, 'users');
    var user = new User({profile: {username: 'moses@gmail.com', email: 'moses@gmail.com', password: 'welcome'}});
    
    user.save(function(error) {
      if (error) {
        console.log(error);
        process.exit(1);
      }
    });  
    */
}