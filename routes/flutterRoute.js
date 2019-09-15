var express = require('express');
var router = express.Router();

const json = require('../public/static/json/test');
const kittens = require('../public/static/json/cards');
const theme = require('../public/static/json/theme');
const funcs = require('../public/functions');


router.get('/start', function(req, res, next) {
    res.send(json);
});

router.get('/images', function(req, res, next) {
    res.send(kittens);
});

router.get('/theme', function(req, res, next) {
    var vibrant = funcs.color.getAccentLocal(theme['data']['url']);
    console.log(req);
    vibrant.then((pallete) => {
        if (req.query.isDark === 'true') {
            theme.data.r = pallete.DarkVibrant.r;
            theme.data.g = pallete.DarkVibrant.g;
            theme.data.b = pallete.DarkVibrant.b;
        } else {
            theme.data.r = pallete.LightVibrant.r;
            theme.data.g = pallete.LightVibrant.g;
            theme.data.b = pallete.LightVibrant.b;
        }
        
        res.send(theme);
    });
});

module.exports = router;
