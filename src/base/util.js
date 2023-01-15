const { Hsluv } = require('hsluv');

const hsl = function(hex, property, adj) {
    const conv = new Hsluv();
    conv.hex = hex;
    conv.hexToHsluv();
    conv[property] += adj;
    conv.hsluvToHex();

    return conv.hex;
}

exports.lightness = function(hex, adj) {
    return hsl(hex, 'hsluv_l', adj);
}

exports.saturation = function(hex, adj) {
    return hsl(hex, 'hsluv_s', adj);
}

exports.hue = function(hex, adj) {
    return hsl(hex, 'hsluv_h', adj) ;
}

exports.alpha = function(color, opacity) {
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);

    return color + _opacity.toString(16).toUpperCase();
}