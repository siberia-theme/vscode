const { lightness } = require('../base/util');

exports.snippet = function (color) {
    return {
        'editor.snippetTabstopHighlightBackground': lightness(color.bg, 4),
        'editor.snippetFinalTabstopHighlightBackground': lightness(color.bg, 4),
    }
}