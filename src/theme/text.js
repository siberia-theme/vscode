const { lightness } = require('../base/util');

exports.text = function(palette) {
    return {
        'textBlockQuote.background': palette.base3,
        'textBlockQuote.border': palette.cyan,
        'textCodeBlock.background': palette.base4,
        'textLink.activeForeground': lightness(palette.fg, 16),
        'textLink.foreground': lightness(palette.fg, 4),
        'textPreformat.foreground': lightness(palette.fg, 4),
        // 'textSeparator.foreground': '',
    }
}