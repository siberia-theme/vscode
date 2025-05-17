const { lightness } = require('../base/util');

exports.base = function (palette) {
    return {
        focusBorder: palette.base1,
        foreground: lightness(palette.bg, 32),
        'widget.shadow': '#00000000',
        descriptionForeground: lightness(palette.bg, 32),
        errorForeground: palette.red,
        'icon.foreground': palette.fg,

        'settings.modifiedItemIndicator': palette.cyan,
        'settings.rowHoverBackground': palette.base1,
        'settings.focusedRowBackground': palette.base1,
    }
}