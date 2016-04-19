"use strict";
//server basic authendication to open the application
var users = [
        {
            "id": 1000,
            "name": "MosesMaxwell",
            "password": "Welcome"
        },
        {
            "id": 1001,
            "name": "Moses",
            "password": "Welcome"
        },
        {
            "id": 1002,
            "name": "Maxwell",
            "password": "Welcome"
        }
    ];
// remap for better performance
var whitelist = {};
users.forEach(function (v) {
    whitelist[v.name] = String(v.password);
});
var auth = require('basic-auth');

module.exports = function (req, res, next) {
    var user = auth(req);
    if (!user || !whitelist[user.name] || whitelist[user.name].password !== user.password) {
        res.set('WWW-Authenticate', 'Basic realm="Simplification"');
        return res.status(401).send("Contact mosesmaxwell|<i>at</i>|gmail|<i>dot</i>|com to request access.");
    }
    return next();
};