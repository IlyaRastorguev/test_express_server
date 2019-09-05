var express = require('express');
var router = express.Router();

var json = require('../public/static/test');


router.get('/', function(req, res, next) {
    res.send(json);
});

module.exports = router;
