const { lightness } = require('../base/util');

exports.commandCenter = function(color) {
    return {
        'commandCenter.background': color.bg,
        'commandCenter.activeBackground': lightness(color.bg, 2),
        'commandCenter.border': color.bg,
        'commandCenter.activeBorder': color.bg,
        'commandCenter.inactiveBorder': color.bg,
        'commandCenter.foreground': color.fg
    }
}