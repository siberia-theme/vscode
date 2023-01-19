const { lightness } = require('../base/util');

exports.quickPicker = function(color) {
    return {
        'pickerGroup.border': lightness(color.bg, -2),
        'pickerGroup.foreground': color.blue,
        'quickInput.background': lightness(color.bg, -2),
        'quickInput.foreground': color.fg,
        'quickInputList.focusBackground': lightness(color.bg, 2),
        'quickInputList.focusForeground': color.fgBright,
        'quickInputList.focusIconForeground': color.cyan,
        'quickInputTitle.background': lightness(color.bg, 2),
    }
}