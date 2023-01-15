const { lightness } = require('../base/util');

exports.scrollbar = function(color) {
    return {
        'scrollbar.shadow': '#0000',
        'scrollbarSlider.activeBackground': lightness(color.bg, 4),
        'scrollbarSlider.background': lightness(color.bg, 4),
        'scrollbarSlider.hoverBackground': lightness(color.bg, 4),
    }
}