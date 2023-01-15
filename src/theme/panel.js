const { lightness } = require('../base/util');

exports.panel = function(color) {
    return {
        'panel.background': color.bg,
        'panel.border': color.bg,
        // 'panel.dropBorder': '',
        'panelTitle.activeBorder': color.bg,
        'panelTitle.activeForeground': color.fg,
        'panelTitle.inactiveForeground': lightness(color.bg, 32),
        // 'panelInput.border': '',
        // 'panelSection.border': '',
        // 'panelSection.dropBackground': '',
        // 'panelSectionHeader.background': '',
        // 'panelSectionHeader.foreground': '',
        // 'panelSectionHeader.border': '',
    }
}