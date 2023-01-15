const { lightness } = require('../base/util');

exports.progressBar = function(color) {
    return {
        'progressBar.background': color.blue,
    }
}