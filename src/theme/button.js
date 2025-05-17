const { lightness } = require('../base/util');

exports.button = function(palette) {
    return {
        'button.background': lightness(palette.bg, -6),
        'button.foreground': lightness(palette.fg, -6),
        'button.border': '#0000',
        'button.separator': lightness(palette.bg, -12),
        'button.hoverBackground': palette.base0,
        'button.secondaryForeground': palette.base0,
        'button.secondaryBackground': lightness(palette.fg, -8),
        'button.secondaryHoverBackground': lightness(palette.fg, -12),
    }
}