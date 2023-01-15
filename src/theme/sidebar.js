const { lightness } = require('../base/util');

exports.sidebar = function(color) {
    return {
        'sideBar.background': lightness(color.bg, -2),
        'sideBar.foreground': lightness(color.bg, 48),
        'sideBar.border': lightness(color.bg, -2),
        'sideBar.dropBackground': lightness(color.bg, 4),
        'sideBarTitle.foreground': color.cyan,
        'sideBarSectionHeader.background': lightness(color.bg, -2),
        'sideBarSectionHeader.foreground': lightness(color.bg, 48),
        'sideBarSectionHeader.border': lightness(color.bg, -2),
    }
}