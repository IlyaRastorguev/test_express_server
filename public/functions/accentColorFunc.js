const Vibrant = require('node-vibrant');
const path = require('path');
const fs = require('fs');
const root = require('../index').root

module.exports = {
    getAccentLocal: function (imagePath) {
        var imageBuffer = fs.readFileSync(path.join(root, imagePath));

        return Vibrant.from(imageBuffer).getPalette();
    },

    getAccentRemote: function (url) {

    },
}