const { lightness } = require('../base/util');

exports.dropdown = function(color) {
    return {
        'dropdown.background': lightness(color.bg, 4),
        'dropdown.listBackground': lightness(color.bg, 4),
        'dropdown.border': lightness(color.bg, 4),
        'dropdown.foreground': color.fg,
    }
}