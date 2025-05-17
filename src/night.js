const colors = require('./base/color-night');
const {
    base,
    titleBar,
    text,
    input,
    list,
    activityBar,
    editorGroup,
    editor,
    statusBar,
    terminal,
    peekView,
    editorWidget,
    sidebar,
    panel,
    button,
    checkbox,
    dropdown,
    scrollbar,
    toolbar,
    badge,
    progressBar,
    quickPicker,
    notification,
    git,
    diffEditor,
    debug,
    symbolIcons,
    snippet,
    commandCenter
} = require('./theme');
const {
    general,
    php,
    js,
    typescript,
    html,
    markdown,
    asciidoc,
    other,
    twig
} = require('./token');
const fs = require('fs').promises;

const palette = colors.palette;

// see https://code.visualstudio.com/api/references/theme-color#panel-colors
const themeColors = {
    ...base(palette),
    ...titleBar(palette),
    ...text(palette),
    ...input(palette),
    ...list(palette),
    ...activityBar(palette),
    ...editorGroup(palette),
    ...editor(palette),
    ...statusBar(palette),
    ...terminal(palette),
    ...peekView(palette),
    ...editorWidget(palette),
    ...sidebar(palette),
    ...panel(palette),
    ...button(palette),
    ...checkbox(palette),
    ...dropdown(palette),
    ...scrollbar(palette),
    ...toolbar(palette),
    ...badge(palette),
    ...progressBar(palette),
    ...quickPicker(palette),
    ...notification(palette),
    ...git(palette),
    ...diffEditor(palette),
    ...debug(palette),
    ...symbolIcons(palette),
    ...snippet(palette),
    ...commandCenter(palette)
};

const tokenColors = [
    ...general(palette),
    ...php(palette),
    ...js(palette),
    ...typescript(palette),
    ...html(palette),
    ...other(palette),
    ...markdown(palette),
    ...asciidoc(palette),
    ...twig(palette)
];

const theme = {
    name: 'Siberia',
    colors: themeColors,
    semanticHighlighting: true,
    tokenColors: tokenColors
}

fs
    .mkdir('../themes', { recursive: true })
    .then(() => Promise.all([
        fs.writeFile('./themes/Siberia-Night-theme.json', JSON.stringify(theme, null, 2)),
    ]))
    .catch(() => process.exit(1));

fs
    .mkdir('./palette', { recursive: true })
    .then(() => Promise.all([
        // fs.writeFile('./palette/palette.json', JSON.stringify({ color: palette }, null, 2)),
        fs.writeFile('./palette/palette-night.json', JSON.stringify({ color: palette }, null, 2)),
    ]))
    .catch(() => process.exit(1));