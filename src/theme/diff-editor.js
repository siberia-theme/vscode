const { lightness, alpha } = require('../base/util');

exports.diffEditor = function (color, syntax) {
    return {
        'diffEditor.insertedLineBackground': syntax.insertedLine,
        'diffEditor.insertedTextBackground': lightness(syntax.insertedLine, 4),
        // 'diffEditor.removedTextBorder': '',
        'diffEditor.border': lightness(color.bg, -2),
        'diffEditor.diagonalFill': lightness(color.bg, 4),
        'diffEditor.removedTextBackground': alpha(color.red, .1),
        'diffEditor.removedLineBackground': alpha(color.red, .1),
        // 'diffEditorGutter.insertedLineBackground': '',
        // 'diffEditorGutter.removedLineBackground': lightness(color.red, -8),
        // 'diffEditorOverview.insertedForeground': lightness('#2e3a4b', 8),
        // 'diffEditorOverview.removedForeground': ''
    }
}