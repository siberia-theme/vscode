const colors = require('./base/color');
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
    snippet
} = require('./theme');
const {
    general,
    php,
    js,
    typescript,
    html,
    other
} = require('./token');
const fs = require('fs').promises;

const color = colors.base;
const syntax = colors.syntax;

// see https://code.visualstudio.com/api/references/theme-color#panel-colors
const themeColors = {
    ...base(color),
    ...titleBar(color),
    ...text(color),
    ...input(color),
    ...list(color),
    ...activityBar(color),
    ...editorGroup(color),
    ...editor(color),
    ...statusBar(color),
    ...terminal(color),
    ...peekView(color),
    ...editorWidget(color),
    ...sidebar(color),
    ...panel(color),
    ...button(color),
    ...checkbox(color),
    ...dropdown(color),
    ...scrollbar(color),
    ...toolbar(color),
    ...badge(color),
    ...progressBar(color),
    ...quickPicker(color),
    ...notification(color),
    ...git(color),
    ...diffEditor(color),
    ...debug(color),
    ...symbolIcons(color),
    ...snippet(color)
};

const tokenColors = [
    ...general(color, syntax),
    ...php(color, syntax),
    ...js(color, syntax),
    ...typescript(color, syntax),
    ...html(color, syntax),
    ...other(color, syntax)
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
        fs.writeFile('./themes/Siberia-theme.json', JSON.stringify(theme, null, 2)),
    ]))
    .catch(() => process.exit(1))
