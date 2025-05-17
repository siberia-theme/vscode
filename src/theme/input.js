const { lightness } = require('../base/util');

exports.input = function(palette) {
    return {
        'input.background': palette.base4,
        'input.border': palette.base4,
        'input.foreground': palette.fg,
        'input.placeholderForeground': lightness(palette.fg, -32),
        'inputOption.activeBackground': lightness(palette.bg, 8),
        'inputOption.activeBorder': '#00000000',
        'inputOption.activeForeground': palette.red,
        'inputOption.hoverBackground': lightness(palette.bg, 8),
        'inputValidation.errorBackground': lightness(palette.red, 4),
        'inputValidation.errorForeground': lightness(palette.red, -96),
        'inputValidation.errorBorder': lightness(palette.red, 4),
        // 'inputValidation.infoBackground': '',
        // 'inputValidation.infoForeground': '',
        // 'inputValidation.infoBorder': '',
        // 'inputValidation.warningBackground': '',
        // 'inputValidation.warningForeground': '',
        // 'inputValidation.warningBorder': '',
    }
}