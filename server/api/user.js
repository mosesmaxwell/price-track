"use strict";
var mongoose = require("mongoose");
var userSchema = require("../models/user.js");

//Model name, schema, collection name
var User = mongoose.model('User', userSchema, 'users');

function createUser(req, res) {
    console.log('Create new user', req);
    var user = new User(req.body);
    user.save(function(error) {
      if (error) {
        return res.json({error: error});
        process.exit(1);
      }
    });
}

function getUser(req, res)
{
  return res.json({message: 'Yes Reachable in Get!', req: req});
}

// public api
module.exports = function (app) {
    app.post('/server/api/user', createUser);
    app.get('/server/api/user', getUser);
}