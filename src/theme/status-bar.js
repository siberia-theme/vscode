const { lightness } = require('../base/util');

exports.statusBar = function(color) {
    return {
        'statusBar.background': lightness(color.bg, -2),
        'statusBar.foreground': color.fgMuted,
        'statusBar.border': lightness(color.bg, -2),
        'statusBar.debuggingBackground': lightness(color.bg, -2),
        'statusBar.debuggingForeground': color.fgMuted,
        'statusBar.debuggingBorder': '#00000000',
        'statusBar.noFolderForeground': color.fgMuted,
        'statusBar.noFolderBackground': lightness(color.bg, -2),
        'statusBar.noFolderBorder': lightness(color.bg, -2),
        'statusBarItem.activeBackground': color.bg,
        'statusBarItem.hoverBackground': lightness(color.bg, 4),
        // 'statusBarItem.prominentForeground': '',
        // 'statusBarItem.prominentBackground': color.red,
        // 'statusBarItem.prominentHoverBackground': lightness(color.bg, -2),
        'statusBarItem.remoteBackground': color.cyan,
        'statusBarItem.remoteForeground': lightness(color.cyan, -64),
        // 'statusBarItem.errorBackground': color.red,
        // 'statusBarItem.errorForeground': '',
        // 'statusBarItem.warningBackground': '',
        // 'statusBarItem.warningForeground': '',
        // 'statusBarItem.compactHoverBackground': '',
        // 'statusBarItem.focusBorder': '',
        'statusBar.focusBorder': color.cyan,
    }
}