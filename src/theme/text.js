const { lightness } = require('../base/util');

exports.text = function(color) {
    return {
        'textBlockQuote.background': lightness(color.bg, 2),
        'textBlockQuote.border': color.cyan,
        'textCodeBlock.background': lightness(color.bg, 4),
        'textLink.activeForeground': lightness(color.fg, 16),
        'textLink.foreground': lightness(color.fg, 4),
        'textPreformat.foreground': lightness(color.fg, 4),
        // 'textSeparator.foreground': '',
    }
}