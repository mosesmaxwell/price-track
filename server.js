//Node Server written in ExpressJS
'use strict';
var fs = require('fs');
var publicDir = 'bin';
if (process.argv.length > 2) {
    publicDir = process.argv[2];
}
if (publicDir == 'watch') {
    publicDir = 'build';
}

var serverBasicAuth = require('./server/config/server.basic-auth.js');

//Connection to Mongodb using mongoose
var mongoose = require('mongoose');
var dbUrl = 'mongodb://mongoosedb:joan123@ds033123.mlab.com:33123/maxwell';
mongoose.connect(dbUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Mongodb connection established!");
});

require('events').EventEmitter.prototype._maxListeners = 50;
var express = require('express');
var app = express();
app.use(express.static(__dirname + "/" + publicDir));
app.use(serverBasicAuth);
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
    console.log("public dir: " + __dirname + "/" + publicDir);
});

module.exports = app;
//