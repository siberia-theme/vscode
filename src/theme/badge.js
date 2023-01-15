const { lightness } = require('../base/util');

exports.badge = function(color) {
    return {
        'badge.foreground': lightness(color.cyan, -64),
        'badge.background': color.cyan,
    }
}