const { lightness } = require('../base/util');

exports.checkbox = function(color) {
    return {
        'checkbox.background': lightness(color.bg, 4),
        'checkbox.foreground': color.fg,
        'checkbox.border': lightness(color.bg, 4),
    }
}