const { lightness } = require('../base/util');

exports.quickPicker = function(color) {
    return {
        // 'pickerGroup.border': '',
        'pickerGroup.foreground': color.blue,
        // 'quickInput.background': '',
        // 'quickInput.foreground': '',
        // 'quickInputList.focusBackground': '',
        // 'quickInputList.focusForeground': '',
        // 'quickInputList.focusIconForeground': '',
        // 'quickInputTitle.background': '',
    }
}