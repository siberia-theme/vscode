const { lightness } = require('../base/util');

exports.toolbar = function(color) {
    return {
        'toolbar.hoverBackground': color.bg,
        'toolbar.hoverOutline': color.bg,
        'toolbar.activeBackground': color.bg,
    }
}