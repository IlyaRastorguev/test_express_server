var express = require('express');
var router = express.Router();

var json = require('../public/static/json/test');
var kittens = require('../public/static/json/cards');


router.get('/start', function(req, res, next) {
    res.send(json);
});

router.get('/kittens', function(req, res, next) {
    res.send(kittens);
});

module.exports = router;
