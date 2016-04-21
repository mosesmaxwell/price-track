'use strict'
var express = require('express');
var app = express();
var normalizedPath = require("path").join(__dirname, "api");
require("fs").readdirSync(normalizedPath).forEach(function (file) {
	require(__dirname + "/api/" + file)(app);
});
module.exports = app;