//Node Server written in ExpressJS
'use strict';
var publicDir = 'bin';
if (process.argv.length > 2) {
    publicDir = process.argv[2];
}
if (publicDir == 'watch') {
    publicDir = 'build';
}
var dbUrl = 'mongodb://bluemongo:bluedb123@ds033163.mongolab.com:33163/maxwell';

require('events').EventEmitter.prototype._maxListeners = 50;
var express = require('express');
var app = express();
app.use(express.static(__dirname + "/" + publicDir));
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
    console.log("public dir: " + __dirname + "/" + publicDir);
});

module.exports = app;
