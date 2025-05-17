const { lightness } = require('../base/util');

exports.statusBar = function(palette) {
    return {
        'statusBar.background': palette.base1,
        'statusBar.foreground': lightness(palette.bg, 30),
        'statusBar.border': palette.base1,
        'statusBar.debuggingBackground': palette.base1,
        'statusBar.debuggingForeground': palette.fgMuted,
        'statusBar.debuggingBorder': '#00000000',
        'statusBar.noFolderForeground': palette.fgMuted,
        'statusBar.noFolderBackground': palette.base1,
        'statusBar.noFolderBorder': palette.base1,
        'statusBarItem.activeBackground': palette.bg,
        'statusBarItem.hoverBackground': palette.base3,
        // 'statusBarItem.prominentForeground': palette.red,
        // 'statusBarItem.prominentBackground': palette.red,
        // 'statusBarItem.prominentHoverBackground': lightness(palette.bg, -2),
        'statusBarItem.remoteBackground': palette.base1,
        'statusBarItem.remoteForeground': palette.fg,
        // 'statusBarItem.errorBackground': palette.red,
        // 'statusBarItem.errorForeground': '',
        // 'statusBarItem.warningBackground': '',
        // 'statusBarItem.warningForeground': '',
        // 'statusBarItem.compactHoverBackground': '',
        // 'statusBarItem.focusBorder': '',
        'statusBar.focusBorder': palette.cyan,
    }
}