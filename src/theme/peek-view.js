const { lightness } = require('../base/util');

exports.peekView = function (color) {
    return {
        'peekView.border': lightness(color.bg, -2),
        'peekViewEditor.background': lightness(color.bg, -2),
        'peekViewEditorGutter.background': lightness(color.bg, -2),
        'peekViewEditor.matchHighlightBackground': lightness(color.bg, 2),
        'peekViewEditor.matchHighlightBorder': lightness(color.bg, 2),
        'peekViewResult.background': lightness(color.bg, -2),
        'peekViewResult.fileForeground': color.fg,
        'peekViewResult.lineForeground': lightness(color.bg, 32),
        'peekViewResult.matchHighlightBackground': lightness(color.bg, 2),
        'peekViewResult.selectionBackground': lightness(color.bg, 2),
        'peekViewResult.selectionForeground': lightness(color.bg, 32),
        'peekViewTitle.background': lightness(color.bg, -2),
        'peekViewTitleDescription.foreground': lightness(color.bg, 32),
        'peekViewTitleLabel.foreground': lightness(color.bg, 48),
    }
}