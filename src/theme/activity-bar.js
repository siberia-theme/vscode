const { lightness } = require('../base/util');

exports.activityBar = function(palette) {
    return {
        'activityBar.background': palette.base1,
        'activityBar.dropBorder': palette.base1,
        'activityBar.foreground': palette.fg,
        'activityBar.inactiveForeground': lightness(palette.bg, 24),
        'activityBar.border': palette.base1,
        'activityBarBadge.background': palette.cyan,
        'activityBarBadge.foreground': lightness(palette.cyan, -32),
        'activityBar.activeBorder': palette.cyan,
        'activityBar.activeBackground': palette.bg,
        'activityBar.activeFocusBorder': palette.cyanBright,
    }
}