const { lightness } = require('../base/util');

exports.editorWidget = function(color) {
    return {
        'editorWidget.foreground': color.fg,
        'editorWidget.background': lightness(color.bg, -2),
        'editorWidget.border': lightness(color.bg, -2),
        'editorWidget.resizeBorder': lightness(color.bg, 16),

        'editorSuggestWidget.background': lightness(color.bg, -2),
        'editorSuggestWidget.border': lightness(color.bg, -2),
        'editorSuggestWidget.foreground': lightness(color.bg, 32),
        'editorSuggestWidget.focusHighlightForeground': lightness(color.bg, 48),
        'editorSuggestWidget.highlightForeground': lightness(color.bg, 48),
        'editorSuggestWidget.selectedBackground': color.bg,
        'editorSuggestWidget.selectedForeground': lightness(color.bg, 48),
        'editorSuggestWidget.selectedIconForeground': color.cyan,
        'editorSuggestWidgetStatus.foreground': lightness(color.bg, 48),

        'editorHoverWidget.foreground': lightness(color.bg, 32),
        'editorHoverWidget.background': lightness(color.bg, -2),
        'editorHoverWidget.border': lightness(color.bg, -2),
        'editorHoverWidget.highlightForeground': lightness(color.bg, 48),
        'editorHoverWidget.statusBarBackground': lightness(color.bg, -2),

        // 'editorGhostText.border': '',
        // 'editorGhostText.background': '',
        // 'editorGhostText.foreground': '',

        // 'editorStickyScroll.background': '',
        // 'editorStickyScrollHover.background': '',

        // 'debugExceptionWidget.background': '',
        // 'debugExceptionWidget.border': '',

        // 'editorMarkerNavigation.background': '',
        // 'editorMarkerNavigationError.background': '',
        // 'editorMarkerNavigationWarning.background': '',
        // 'editorMarkerNavigationInfo.background': '',
        // 'editorMarkerNavigationError.headerBackground': '',
        // 'editorMarkerNavigationWarning.headerBackground': '',
        // 'editorMarkerNavigationInfo.headerBackground': '',
    }
}