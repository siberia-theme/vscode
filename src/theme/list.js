const { lightness } = require('../base/util');

exports.list = function(palette) {
    return {
        'list.activeSelectionBackground': lightness(palette.blue, -32),
        'list.activeSelectionForeground': lightness(palette.blue, 16),
        // 'list.activeSelectionIconForeground': palette.cyan,
        'list.dropBackground': palette.base4,
        'list.focusBackground': palette.base4,
        'list.focusForeground': lightness(palette.bg, 48),
        // 'list.focusHighlightForeground': lightness(palette.bg, 48),
        'list.focusOutline': '#0000',
        // 'list.focusAndSelectionOutline': null,
        'list.highlightForeground': palette.cyan,
        'list.hoverForeground': lightness(palette.bg, 48),
        'list.hoverBackground': palette.base4,
        'list.inactiveSelectionBackground': palette.base4,
        'list.inactiveSelectionForeground': lightness(palette.bg, 48),
        'list.inactiveSelectionIconForeground': lightness(palette.bg, 48),
        'list.inactiveFocusBackground': palette.base3,
        // 'list.inactiveFocusOutline': null,
        // 'list.invalidItemForeground': '',
        'list.errorForeground': palette.red,
        'list.warningForeground': palette.yellow,
        // 'listFilterWidget.background': '',
        // 'listFilterWidget.outline': '',
        // 'listFilterWidget.noMatchesOutline': '',
        'list.filterMatchBackground': palette.base4,
        'list.filterMatchBorder': palette.base4,
        // 'list.deemphasizedForeground': '',
        'tree.indentGuidesStroke': palette.base4,
        // 'tree.tableColumnsBorder': '',
        'tree.tableOddRowsBackground': palette.base3,

        'keybindingLabel.background': lightness(palette.bg, 16),
        'keybindingLabel.border': palette.base1,
        'keybindingLabel.bottomBorder': palette.base0
    }
}