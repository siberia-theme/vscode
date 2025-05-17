// const { base } = require('./base/color');
const { palette: nightPalette } = require('./base/color-night');
const fs = require('fs').promises;

fs
    .mkdir('./palette', { recursive: true })
    .then(() => Promise.all([
        // fs.writeFile('./palette/palette.json', JSON.stringify({ color: palette }, null, 2)),
        fs.writeFile('./palette/palette-night.json', JSON.stringify({ color: nightPalette }, null, 2)),
    ]))
    .catch(() => process.exit(1))