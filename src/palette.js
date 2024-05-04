const { base } = require('./base/color');
const fs = require('fs').promises;

fs
    .mkdir('./palette', { recursive: true })
    .then(() => Promise.all([
        fs.writeFile('./palette/palette.json', JSON.stringify({ color: base }, null, 2)),
    ]))
    .catch(() => process.exit(1))