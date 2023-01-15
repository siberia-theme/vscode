const { lightness } = require('../base/util');

exports.button = function(color) {
    return {
        'button.background': lightness(color.bg, -6),
        'button.foreground': lightness(color.fg, -6),
        'button.border': '#0000',
        'button.separator': lightness(color.bg, -12),
        'button.hoverBackground': lightness(color.bg, -4),
        'button.secondaryForeground': lightness(color.bg, -4),
        'button.secondaryBackground': lightness(color.fg, -8),
        'button.secondaryHoverBackground': lightness(color.fg, -12),
    }
}