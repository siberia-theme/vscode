const { lightness } = require('../base/util');

exports.sidebar = function(palette) {
    return {
        'sideBar.background': palette.base1,
        'sideBar.foreground': lightness(palette.bg, 48),
        'sideBar.border': palette.base1,
        'sideBar.dropBackground': palette.base4,
        'sideBarTitle.foreground': palette.cyan,
        'sideBarSectionHeader.background': palette.base1,
        'sideBarSectionHeader.foreground': lightness(palette.bg, 48),
        'sideBarSectionHeader.border': palette.base1,
    }
}