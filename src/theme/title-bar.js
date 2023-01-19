const { lightness } = require('../base/util');

exports.titleBar = function(color) {
    return {
        'titleBar.activeBackground': lightness(color.bg, -2),
        'titleBar.activeForeground': color.fg,
        'titleBar.inactiveBackground': lightness(color.bg, -2),
        'titleBar.inactiveForeground': color.fg,
        'titleBar.border': lightness(color.bg, -2),
    }
}