const { lightness } = require('../base/util');

exports.input = function(color) {
    return {
        'input.background': lightness(color.bg, 4),
        'input.border': lightness(color.bg, 4),
        'input.foreground': color.fg,
        'input.placeholderForeground': lightness(color.fg, -32),
        'inputOption.activeBackground': lightness(color.bg, 8),
        'inputOption.activeBorder': '#00000000',
        'inputOption.activeForeground': color.red,
        'inputOption.hoverBackground': lightness(color.bg, 8),
        'inputValidation.errorBackground': lightness(color.red, 4),
        'inputValidation.errorForeground': lightness(color.red, -96),
        'inputValidation.errorBorder': lightness(color.red, 4),
        // 'inputValidation.infoBackground': '',
        // 'inputValidation.infoForeground': '',
        // 'inputValidation.infoBorder': '',
        // 'inputValidation.warningBackground': '',
        // 'inputValidation.warningForeground': '',
        // 'inputValidation.warningBorder': '',
    }
}