const { lightness, alpha } = require('../base/util');

exports.diffEditor = function (color) {
    return {
        'diffEditor.insertedLineBackground': '#2e3a4b',
        'diffEditor.insertedTextBackground': lightness('#2e3a4b', 4),
        // 'diffEditor.removedTextBorder': '',
        'diffEditor.border': lightness(color.bg, -2),
        'diffEditor.diagonalFill': lightness(color.bg, 4),
        'diffEditor.removedTextBackground': lightness('#383542', 2),
        'diffEditor.removedLineBackground': lightness('#383542', 2),
        // 'diffEditorGutter.insertedLineBackground': '',
        // 'diffEditorGutter.removedLineBackground': lightness(color.red, -8),
        // 'diffEditorOverview.insertedForeground': lightness('#2e3a4b', 8),
        // 'diffEditorOverview.removedForeground': ''
    }
}