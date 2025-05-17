const { lightness } = require('../base/util')

exports.debug = function (palette) {
    return {
        'debugToolBar.background': palette.base1,
        'debugIcon.breakpointForeground': palette.red
    }
}