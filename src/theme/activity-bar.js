const { lightness } = require('../base/util');

exports.activityBar = function(color) {
    return {
        'activityBar.background': lightness(color.bg, -2),
        'activityBar.dropBorder': lightness(color.bg, -2),
        'activityBar.foreground': color.fg,
        'activityBar.inactiveForeground': lightness(color.bg, 24),
        'activityBar.border': lightness(color.bg, -2),
        'activityBarBadge.background': color.cyan,
        'activityBarBadge.foreground': lightness(color.cyan, -32),
        'activityBar.activeBorder': color.cyan,
        'activityBar.activeBackground': color.bg,
        'activityBar.activeFocusBorder': color.cyanBright,
    }
}