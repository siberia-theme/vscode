const { lightness, alpha } = require('../base/util');

exports.diffEditor = function (palette) {
    return {
        'diffEditor.insertedLineBackground': palette.insertedLine,
        'diffEditor.insertedTextBackground': lightness(palette.insertedLine, 4),
        // 'diffEditor.removedTextBorder': '',
        'diffEditor.border': palette.base1,
        'diffEditor.diagonalFill': palette.base4,
        'diffEditor.removedTextBackground': alpha(palette.red, .1),
        'diffEditor.removedLineBackground': alpha(palette.red, .1),
        // 'diffEditorGutter.insertedLineBackground': '',
        // 'diffEditorGutter.removedLineBackground': lightness(color.red, -8),
        // 'diffEditorOverview.insertedForeground': lightness('#2e3a4b', 8),
        // 'diffEditorOverview.removedForeground': ''
    }
}