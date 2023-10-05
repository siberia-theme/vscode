const { lightness, saturation } = require('./util');

const color = {
    bg: '#2d313f',
    fgBright: lightness('#2d313f', 64),
    fg: saturation(lightness('#2d313f', 48), 8),
    fgSubtle: lightness('#2d313f', 40),
    fgMuted: lightness('#2d313f', 24),
    red: '#e98989',
    green: '#76a99f',
    orange: '#de9e77',
    yellow: '#ecbfa1',
    blue: '#91acd1',
    magenta: '#ada0d3',
    cyan: '#7ab5cc',
    cyanBright: '#86e1fc',
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