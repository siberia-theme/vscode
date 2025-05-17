const { lightness } = require('../base/util');

exports.terminal = function(palette) {
    return {
        'terminal.background': palette.bg,
        'terminal.border': palette.bg,
        'terminal.foreground': palette.fgBright,
        'terminal.ansiBlack': lightness(palette.bg, 32),
        'terminal.ansiBrightBlack': lightness(palette.bg, 64),
        'terminal.ansiBrightWhite': palette.fgBright,

        'terminal.ansiBrightBlue': palette.termBlue,
        'terminal.ansiBrightCyan': palette.termCyan,
        'terminal.ansiBrightGreen': palette.termGreen,
        'terminal.ansiBrightMagenta': palette.termMagenta,
        'terminal.ansiBrightRed': palette.termRed,
        'terminal.ansiBrightYellow': palette.termYellow,

        'terminal.ansiBlue': palette.termBlueDimmed,
        'terminal.ansiCyan': palette.termCyanDimmed,
        'terminal.ansiGreen': palette.termGreenDimmed,
        'terminal.ansiMagenta': palette.termMagentaDimmed,
        'terminal.ansiRed': palette.termRedDimmed,
        'terminal.ansiYellow': palette.termYellowDimmed,

        'terminal.ansiWhite': palette.fg,
        'terminal.selectionBackground': lightness(palette.bg, 6),
        // 'terminal.selectionForeground': null,
        'terminal.findMatchBackground': palette.base4,
        // 'terminal.findMatchBorder': '',
        'terminal.findMatchHighlightBackground': palette.base4,
        // 'terminal.findMatchHighlightBorder': '',
        'terminalCursor.background': palette.fg,
        'terminalCursor.foreground': palette.fg,
        // 'terminal.dropBackground': '',
        'terminal.tab.activeBorder': palette.cyan,
        // 'terminalCommandDecoration.defaultBackground': '',
        // 'terminalCommandDecoration.successBackground': '',
        // 'terminalCommandDecoration.errorBackground': '',
        // 'terminalOverviewRuler.cursorForeground': '',
        // 'terminalOverviewRuler.findMatchForeground': ''
    }
}