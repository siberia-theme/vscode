const { lightness } = require('../base/util');

exports.list = function(color) {
    return {
        'list.activeSelectionBackground': lightness(color.blue, -32),
        'list.activeSelectionForeground': lightness(color.blue, 16),
        // 'list.activeSelectionIconForeground': color.cyan,
        'list.dropBackground': lightness(color.bg, 4),
        'list.focusBackground': lightness(color.bg, 4),
        'list.focusForeground': lightness(color.bg, 48),
        // 'list.focusHighlightForeground': lightness(color.bg, 48),
        'list.focusOutline': '#0000',
        // 'list.focusAndSelectionOutline': null,
        'list.highlightForeground': color.cyan,
        'list.hoverBackground': lightness(color.bg, 4),
        'list.hoverForeground': lightness(color.bg, 48),
        'list.inactiveSelectionBackground': lightness(color.bg, 4),
        'list.inactiveSelectionForeground': lightness(color.bg, 48),
        'list.inactiveSelectionIconForeground': lightness(color.bg, 48),
        'list.inactiveFocusBackground': lightness(color.bg, 2),
        // 'list.inactiveFocusOutline': null,
        // 'list.invalidItemForeground': '',
        'list.errorForeground': color.red,
        'list.warningForeground': color.yellow,
        // 'listFilterWidget.background': '',
        // 'listFilterWidget.outline': '',
        // 'listFilterWidget.noMatchesOutline': '',
        'list.filterMatchBackground': lightness(color.bg, 4),
        'list.filterMatchBorder': lightness(color.bg, 4),
        // 'list.deemphasizedForeground': '',
        'tree.indentGuidesStroke': lightness(color.bg, 4),
        // 'tree.tableColumnsBorder': '',
        'tree.tableOddRowsBackground': lightness(color.bg, 2),

        'keybindingLabel.background': lightness(color.bg, 16),
        'keybindingLabel.border': lightness(color.bg, -2),
        'keybindingLabel.bottomBorder': lightness(color.bg, -4)
    }
}