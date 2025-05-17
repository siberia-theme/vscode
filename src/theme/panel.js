const { lightness } = require('../base/util');

exports.panel = function(palette) {
    return {
        'panel.background': palette.bg,
        'panel.border': palette.bg,
        'panel.dropBorder': palette.base1,
        'panelTitle.activeBorder': palette.bg,
        'panelTitle.activeForeground': palette.fg,
        'panelTitle.inactiveForeground': lightness(palette.bg, 30),
        // 'panelInput.border': '',
        // 'panelSection.border': '',
        // 'panelSection.dropBackground': '',
        // 'panelSectionHeader.background': '',
        // 'panelSectionHeader.foreground': '',
        // 'panelSectionHeader.border': '',
    }
}