const { lightness } = require('../base/util');

exports.panel = function(color) {
    return {
        'panel.background': color.bg,
        'panel.border': color.bg,
        'panel.dropBorder': lightness(color.bg, -2),
        'panelTitle.activeBorder': color.bg,
        'panelTitle.activeForeground': color.fg,
        'panelTitle.inactiveForeground': color.fgDimmed,
        // 'panelInput.border': '',
        // 'panelSection.border': '',
        // 'panelSection.dropBackground': '',
        // 'panelSectionHeader.background': '',
        // 'panelSectionHeader.foreground': '',
        // 'panelSectionHeader.border': '',
    }
}