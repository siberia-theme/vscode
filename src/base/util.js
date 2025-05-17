const { Hsluv } = require('hsluv');

const boundaries = {
    hpluv_l: 100,
    hpluv_p: 100,
    hpluv_h: 360,

    hsluv_l: 100,
    hsluv_s: 100,
    hsluv_h: 360
};

const hsl = function(hex, property, adj) {
    const conv = new Hsluv();
    conv.hex = hex;
    conv.hexToHpluv();
    var newVal = conv[property] + adj;
    if (newVal > boundaries[property]) {
        newVal = boundaries[property];
    }
    if (newVal < 0) {
        newVal = 0;
    }
    conv[property] = newVal;
    conv.hpluvToHex();

    return conv.hex;
}

exports.lightness = function(hex, adj) {
    return hsl(hex, 'hpluv_l', adj);
}

exports.saturation = function(hex, adj) {
    return hsl(hex, 'hpluv_p', adj);
}

exports.hue = function(hex, adj) {
    return hsl(hex, 'hpluv_h', adj) ;
}

exports.alpha = function(color, opacity) {
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);

    return color + _opacity.toString(16).toUpperCase();
}