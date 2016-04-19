"use strict";
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
var userSchema = require("../models/user.js");

function createUser(req, res) {
  
  var userData = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
  };  
  //Model name, schema, collection name
  var User = mongoose.model('User', userSchema, 'users');
  var user = new User();
    user.save(userData, function(error) {
      if (error) {
        res.json({error: error});
        process.exit(1);
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