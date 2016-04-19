"use strict";
var mongoose = require("mongoose");
var userSchema = require("../models/user.js");

//Model name, schema, collection name
var User = mongoose.model('User', userSchema, 'users');

function createUser(req, res) {
    var user = new User({profile: req.body});
    user.save(function(error) {
      if (error) {
        return res.json({error: error, request: req.body});
        process.exit(1);
      }
    });
}

// public api
module.exports = function (app) {
    app.post('/server/api/user', createUser);
    app.get('/server/api/user', function(req, res){
      res.send('reachable to api user inside the server');
    });
}