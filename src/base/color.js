const { lightness, saturation } = require('./util');

const color = {
    bg: '#2d313f',
    fg: '#b8bccd', // lightness('#2d313f', 56),
    fgDimmed: '#616884',
    fgBright: '#d0d3dd', // lightness('#2d313f', 64),
    red: '#e98989',
    green: '#7aa89f',
    orange: '#de9e77',
    yellow: '#ecbfa1',
    blue: '#91acd1',
    magenta: '#ada0d3',
    cyan: '#7fb4ca',
    cyanBright: '#86e1fc',
    special: '#de9e77'
}

const syntax = {
    string: color.green,
    comment: '#535a71', // lightness(color.bg, 18),
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
}

exports.base = color;
exports.syntax = syntax;