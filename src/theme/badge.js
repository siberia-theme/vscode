const { lightness } = require('../base/util');

exports.badge = function(palette) {
    return {
        'badge.foreground': lightness(palette.cyan, -64),
        'badge.background': palette.cyan,
    }
}