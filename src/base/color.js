const { lightness, saturation, hue } = require('./util');

const baseColor = {
    bg: '#2d313f',
    fg: saturation(lightness('#2d313f', 48), 16),
    red: '#e98989',
    green: '#6dab9f',
    orange: '#de9e77',
    yellow: '#ecbfa1',
    blue: '#8bacd8',
    magenta: '#ada0d3',
    cyan: '#70b6d0',
}

const color = {
    ...baseColor,

    fgBright: lightness(baseColor.fg, 16),
    fgSubtle: saturation(lightness(baseColor.fg, -16), -16),
    fgMuted: saturation(lightness(baseColor.fg, -24), -16),

    greenBright: lightness(hue(baseColor.green, -2), 8),
    greenDark: lightness(hue(baseColor.green, 2), -16),

    blueBright: lightness(hue(baseColor.blue, -2), 8),
    blueDark: lightness(hue(baseColor.blue, 2), -12),

    cyanBright: lightness(hue(baseColor.cyan, -2), 16),
    cyanDark: lightness(hue(baseColor.cyan, 4), -12),

    magentaDark: lightness(hue(baseColor.magenta, 8), -4),

    redDark: lightness(hue(baseColor.red, 8), -4),

    yellowBright: lightness(hue(baseColor.yellow, 4), 8),
    yellowDark: lightness(hue(baseColor.yellow, -4), -12),

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
    storage: color.blue,

    insertedLine: '#364152'
}

exports.base = color;
exports.syntax = syntax;