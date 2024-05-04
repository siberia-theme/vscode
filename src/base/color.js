const { lightness, saturation, hue } = require('./util');

const baseColor = {
    bg: '#2d313f',
    fg: lightness('#2d313f', 48),
    red: '#e98989',
    green: '#6dab9f',
    orange: '#de9e77',
    yellow: '#ecbfa1',
    blue: '#8bacd8',
    magenta: '#ada0d3',
    cyan: '#70b6d0',
    // cyanBright: '#86e1fc',
    // special: '#de9e77',
}

const color = {
    ...baseColor,
    fgBright: lightness(baseColor.fg, 16),
    fgSubtle: lightness(baseColor.fg, -16),
    fgMuted: lightness(baseColor.fg, -24),
    greenBright: lightness(hue(baseColor.green, -2), 8),
    greenDark: lightness(hue(baseColor.green, 2), -16),

    blueBright: lightness(hue(baseColor.blue, -2), 8),
    blueDark: lightness(hue(baseColor.blue, 2), -16),

    cyanBright: lightness(hue(baseColor.cyan, -2), 16),
    special: '#de9e77',
}

const syntax = {
    string: color.green,
    comment: color.fgMuted,
    number: color.magenta,
    languageConstant: color.yellow,
    constant: color.fgBright,
    variable: color.fg,
    method: color.fgBright,
    class: color.cyan,
    property: color.fgBright,
    type: color.cyan,
    control: color.blue,
    special: color.orange,
    storage: color.blue
}

exports.base = color;
exports.syntax = syntax;