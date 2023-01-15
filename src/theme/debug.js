const { lightness } = require('../base/util')

exports.debug = function (color) {
    return {
        'debugToolBar.background': lightness(color.bg, -2)
    }
}