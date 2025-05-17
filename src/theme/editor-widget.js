const { lightness } = require('../base/util');

exports.editorWidget = function(palette) {
    return {
        'editorWidget.foreground': palette.fg,
        'editorWidget.background': palette.base1,
        'editorWidget.border': palette.base1,
        'editorWidget.resizeBorder': lightness(palette.bg, 16),

        'editorSuggestWidget.background': palette.base1,
        'editorSuggestWidget.border': palette.base1,
        'editorSuggestWidget.foreground': lightness(palette.bg, 32),
        'editorSuggestWidget.focusHighlightForeground': lightness(palette.bg, 48),
        'editorSuggestWidget.highlightForeground': lightness(palette.bg, 48),
        'editorSuggestWidget.selectedBackground': palette.bg,
        'editorSuggestWidget.selectedForeground': lightness(palette.bg, 48),
        'editorSuggestWidget.selectedIconForeground': palette.cyan,
        'editorSuggestWidgetStatus.foreground': lightness(palette.bg, 48),

        'editorHoverWidget.foreground': lightness(palette.bg, 32),
        'editorHoverWidget.background': palette.base1,
        'editorHoverWidget.border': palette.base1,
        'editorHoverWidget.highlightForeground': lightness(palette.bg, 48),
        'editorHoverWidget.statusBarBackground': palette.base1,

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