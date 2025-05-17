const { Hsluv } = require('hsluv');

class Color {
    hsluv = new Hsluv();
    constructor(params) {
        this.hsluv.hpluv_h = params.hue;
        this.hsluv.hpluv_p = params.chroma;
        this.hsluv.hpluv_l = params.lightness;
    }

    hex() {
        this.hsluv.hpluvToHex();

        return this.hsluv.hex;
    }

    hue(adj) {
        this.hsluv.hpluv_h += adj;

        return this;
    }

    chroma(adj) {
        this.hsluv.hpluv_p += adj;

        return this;
    }

    lightness(adj) {
        this.hsluv.hpluv_l += adj;

        return this;
    }

    clone() {
        return new Color({
            hue: this.hsluv.hpluv_h,
            chroma: this.hsluv.hpluv_p,
            lightness: this.hsluv.hpluv_l,
        });
    }
};

const chroma = 76;
const l = 60;

const bgColor = new Color({ hue: 262, chroma: 60, lightness: 14 });
const fgColor = new Color({ hue: 262, chroma: 40, lightness: 76 });

const blueColor = new Color({ hue: 240, chroma: 60, lightness: 60 });
const greenColor = new Color({ hue: 160, chroma: 20, lightness: 70 });
const cyanColor = new Color({ hue: 240, chroma: 60, lightness: 70 });
const redColor = new Color({ hue: 0, chroma: 80, lightness: 60 });
const magentaColor = new Color({ hue: 290, chroma, lightness: 60 });
const yellowColor = new Color({ hue: 20, chroma: 38, lightness: 76 });

const storageColor = blueColor.clone();
const classColor = cyanColor.clone();
const stringColor = yellowColor.clone();
const methodColor = new Color({ hue: 262, chroma: 40, lightness: 88 });
const commentColor = new Color({ hue: 262, chroma: 40, lightness: 40 });
const numberColor = redColor.clone();

const palette = {
    bg: bgColor.hex(),

    // base colors (bg, surface, etc)
    base0: bgColor.clone().lightness(-4).hex(),
    base1: bgColor.clone().lightness(-2).hex(),
    base2: bgColor.hex(), // bg
    base3: bgColor.clone().lightness(2).hex(),
    base4: bgColor.clone().lightness(4).hex(),
    base5: bgColor.clone().lightness(6).hex(),
    base6: bgColor.clone().lightness(8).hex(),

    fgMuted: fgColor.clone().lightness(-30).hex(),
    fgSubtle: fgColor.clone().lightness(-24).hex(),
    fg: fgColor.hex(), // normal ui color
    fgBright: fgColor.clone().lightness(16).chroma(30).hex(),

    // Terminal colors
    redDark: numberColor.clone().lightness(-10).hex(),
    red: numberColor.clone().hex(),
    redBright: numberColor.clone().lightness(10).hex(),

    blueDark: storageColor.clone().lightness(-10).hex(),
    blue: storageColor.clone().hex(),
    blueBright: storageColor.clone().lightness(10).hex(),

    cyanDark: classColor.clone().lightness(-10).hex(),
    cyan: classColor.clone().hex(),
    cyanBright: classColor.clone().lightness(10).hex(),

    yellowDark: stringColor.clone().lightness(-10).hex(),
    yellow: stringColor.clone().hex(),
    yellowBright: stringColor.clone().lightness(10).hex(),

    magentaDark: magentaColor.clone().lightness(-10).hex(),
    magenta: magentaColor.hex(),
    magentaBright: magentaColor.clone().lightness(10).hex(),

    greenDark: greenColor.clone().lightness(-10).hex(),
    green: greenColor.hex(),
    greenBright: greenColor.clone().lightness(10).hex(),

    termGreen: greenColor.clone().lightness(0).chroma(40).hex(),
    termCyan: cyanColor.clone().lightness(0).chroma(40).hex(),
    termRed: redColor.clone().lightness(0).chroma(40).hex(),
    termBlue: blueColor.clone().lightness(0).chroma(40).hex(),
    termYellow: yellowColor.clone().lightness(0).chroma(40).hex(),
    termMagenta: magentaColor.clone().lightness(0).chroma(40).hex(),

    termGreenDimmed: greenColor.clone().lightness(-10).chroma(20).hex(),
    termCyanDimmed: cyanColor.clone().lightness(-10).chroma(20).hex(),
    termRedDimmed: redColor.clone().lightness(-10).chroma(20).hex(),
    termBlueDimmed: blueColor.clone().lightness(-10).chroma(20).hex(),
    termYellowDimmed: yellowColor.clone().lightness(-10).chroma(20).hex(),
    termMagentaDimmed: magentaColor.clone().lightness(-10).chroma(20).hex(),

    // Base syntaxt
    special: magentaColor.hex(),
    string: stringColor.hex(),
    comment: commentColor.hex(),
    number: numberColor.hex(),
    languageConstant: classColor.hex(),
    constant: fgColor.hex(),
    variable: fgColor.hex(),
    method: methodColor.hex(),
    class: classColor.hex(),
    property: fgColor.clone().lightness(16).chroma(30).hex(), // fgBright
    type: classColor.hex(),
    control: storageColor.hex(),
    storage: storageColor.hex(),

    insertedLine: '#364152'
};

exports.palette = palette;