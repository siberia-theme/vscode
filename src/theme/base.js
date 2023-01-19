const { lightness, alpha } = require('../base/util');

exports.base = function (color) {
    return {
        focusBorder: lightness(color.bg, -2),
        foreground: lightness(color.bg, 32),
        'widget.shadow': '#00000000',
        descriptionForeground: lightness(color.bg, 32),
        errorForeground: color.red,
        'icon.foreground': color.fg,

        'settings.modifiedItemIndicator': color.cyan,
        'settings.rowHoverBackground': lightness(color.bg, -2),
        'settings.focusedRowBackground': lightness(color.bg, -2),
    }
}