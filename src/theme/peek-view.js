const { lightness } = require('../base/util');

exports.peekView = function (palette) {
    return {
        'peekView.border': palette.base1,
        'peekViewEditor.background': palette.base1,
        'peekViewEditorGutter.background': palette.base1,
        'peekViewEditor.matchHighlightBackground': palette.base3,
        'peekViewEditor.matchHighlightBorder': palette.base3,
        'peekViewResult.background': palette.base1,
        'peekViewResult.fileForeground': palette.fg,
        'peekViewResult.lineForeground': lightness(palette.bg, 32),
        'peekViewResult.matchHighlightBackground': palette.base3,
        'peekViewResult.selectionBackground': palette.base3,
        'peekViewResult.selectionForeground': lightness(palette.bg, 32),
        'peekViewTitle.background': palette.base1,
        'peekViewTitleDescription.foreground': lightness(palette.bg, 32),
        'peekViewTitleLabel.foreground': lightness(palette.bg, 48),
    }
}