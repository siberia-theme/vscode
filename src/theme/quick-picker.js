const { lightness } = require('../base/util');

exports.quickPicker = function(palette) {
    return {
        'pickerGroup.border': palette.base1,
        'pickerGroup.foreground': palette.blue,
        'quickInput.background': palette.base1,
        'quickInput.foreground': palette.fg,
        'quickInputList.focusBackground': palette.base3,
        'quickInputList.focusForeground': palette.fgBright,
        'quickInputList.focusIconForeground': palette.cyan,
        'quickInputTitle.background': palette.base3,
    }
}