const { lightness } = require('../base/util');

exports.statusBar = function(color) {
    return {
        'statusBar.background': lightness(color.bg, -2),
        'statusBar.foreground': lightness(color.bg, 32),
        'statusBar.border': lightness(color.bg, -2),
        'statusBar.debuggingBackground': color.cyan,
        'statusBar.debuggingForeground': lightness(color.cyan, -64),
        'statusBar.debuggingBorder': '#00000000',
        // 'statusBar.noFolderForeground': '',
        // 'statusBar.noFolderBackground': '',
        // 'statusBar.noFolderBorder': '',
        'statusBarItem.activeBackground': color.bg,
        'statusBarItem.hoverBackground': lightness(color.bg, 2),
        // 'statusBarItem.prominentForeground': '',
        // 'statusBarItem.prominentBackground': '',
        'statusBarItem.prominentHoverBackground': lightness(color.bg, -2),
        'statusBarItem.remoteBackground': color.cyan,
        'statusBarItem.remoteForeground': lightness(color.cyan, -64),
        // 'statusBarItem.errorBackground': '',
        // 'statusBarItem.errorForeground': '',
        // 'statusBarItem.warningBackground': '',
        // 'statusBarItem.warningForeground': '',
        // 'statusBarItem.compactHoverBackground': '',
        // 'statusBarItem.focusBorder': '',
        // 'statusBarItem.settingsProfilesForeground': '',
        // 'statusBarItem.settingsProfilesBackground': lightness(color.bg, -2),
        // 'statusBar.focusBorder': '',
    }
}