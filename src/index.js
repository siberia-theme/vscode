const { lightness } = require('./base/util');
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
} = require('./theme');
const fs = require("fs").promises;

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
    ...debug(color)
};

const theme = {
    name: "Siberia",
    colors: themeColors,
    semanticHighlighting: true,
    tokenColors: [
        {
            scope: [ 'comment', 'string.comment', 'comment.block', 'punctuation.definition.comment' ],
            settings: { foreground: syntax.comment },
        },
        // {
        //     scope: [ 'keyword.other.phpdoc' ],
        //     settings: { foreground: lightness(syntax.comment, 16) },
        // },
        {
            scope: [ 'comment' ],
            settings: { fontStyle: 'italic' }
        },
        {
            scope: [ 'constant.numeric' ],
            settings: { foreground: syntax.number },
        },
        {
            scope: [ 'constant.language' ],
            settings: { foreground: syntax.languageConstant }
        },
        {
            scope: [ 'constant.other' ],
            settings: { foreground: syntax.constant },
        },
        {
            scope: [ 'storage.modifier' ],
            settings: { foreground: syntax.storage }
        },
        {
            scope: [ 'punctuation', 'keyword.operator', 'meta.brace' ],
            settings: { foreground: lightness(color.fg, -32) }
        },
        {
            scope: [ 'variable' ],
            settings: { foreground: syntax.variable }
        },
        // {
        //     scope: [ 'support.other.namespace' ],
        //     settings: { foreground: color.fg }
        // },
        {
            scope: [ 'variable.other.property' ],
            settings: { foreground: syntax.property }
        },
        {
            scope: [ 'string.quoted' ],
            settings: { foreground: syntax.string, fontStyle: 'italic' }
        },
        // {
        //     scope: [ 'string.regexp', 'storage.modifier.reference' ],
        //     settings: { foreground: syntax.special }
        // },
        {
            scope: [ 'entity.name.type.class', 'entity.other.inherited-class' ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [ 'meta.method-call', 'support.function' ],
            settings: { foreground: syntax.method }
        },
        {
            scope: [ 'keyword.other.type', 'support.type.primitive' ],
            settings: { foreground: syntax.type }
        },
        {
            scope: [ 'keyword.control' ],
            settings: { foreground: syntax.control }
        },
        {
            scope: [ 'keyword.operator.logical' ],
            settings: { foreground: color.special }
        },
        {
            scope: [ 'meta.decorator' ],
            settings: { foreground: color.yellow }
        },

        // // php
        // {
        //     scope: [ 'punctuation.definition.variable.php' ],
        //     settings: { foreground: lightness(color.bg, 16) }
        // },
        {
            scope: [ 'keyword.other.use.php', 'storage.type.function.php', 'storage.type.class.php' ],
            settings: { foreground: color.blue }
        },
        {
            scope: [ 'meta.function.parameter.typehinted.php' ],
            settings: { foreground: syntax.type }
        },
        {
            scope: [ 'meta.class.body.php', 'support.class.php', 'support.function' ],
            settings: { foreground: syntax.class }
        },

        // // rust
        // {
        //     scope: [ 'entity.name.type.primitive.rust', 'entity.name.type.numeric.rust' ],
        //     settings: { foreground: syntax.type }
        // },
        // {
        //     scope: [ 'entity.name.type.rust' ],
        //     settings: { foreground: syntax.class }
        // },

        // // ts
        {
            scope: [ 'keyword.operator.new.ts', ],
            settings: { foreground: lightness(color.blue, -16) }
        },
        {
            scope: [ 'entity.name.type.alias.ts', 'entity.name.type.enum.ts', 'entity.name.type.ts' ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [
                'storage.type.ts',
                'keyword.operator.expression',
                'storage.type.interface.ts',
                'storage.type.class.ts'
            ],
            settings: { foreground: syntax.storage }
        },
        {
            scope: [ 'keyword.operator.new.ts', ],
            settings: { foreground: lightness(color.blue, -16) }
        },

        // // tsx
        {
            scope: [ 'storage.type.tsx' ],
            settings: { foreground: syntax.storage }
        },
        {
            scope: [ 'entity.name.tag.tsx' ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [ 'entity.name.type', 'support.type.primitive' ],
            settings: { foreground: syntax.type }
        },
        {
            scope: [ 'string.quoted.single.tsx', 'string.quoted.double.tsx' ],
            settings: { fontStyle: '' }
        },
        {
            scope: [ 'entity.other.attribute-name.tsx'  ],
            settings: { foreground: color.fg }
        },
        // // html
        {
            scope: [ 'entity.name.tag.html' ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [ 'string.quoted.double.html', 'string.quoted.single.html' ],
            settings: { fontStyle: '' }
        },
        // {
        //     scope: ['entity.other.attribure-name.html'],
        //     settings: { foreground: syntax.property }
        // }

        // Dockerfile
        {
            scope: [ 'keyword.other.special-method.dockerfile' ],
            settings: { foreground: color.cyan }
        },

        // ini
        {
            scope: [ 'entity.name.section.group-title.ini' ],
            settings: { foreground: color.cyan }
        },

        // yaml
        {
            scope: [ 'entity.name.tag' ],
            settings: { foreground: color.cyan }
        }, {
            scope: [ 'string.unquoted.plain.out.yaml' ],
            settings: { foreground: color.green }
        },
    ]
}

fs.mkdir('../themes', { recursive: true })
    .then(() => Promise.all([
        fs.writeFile('./themes/Siberia-color-theme.json', JSON.stringify(theme, null, 2)),
    ]))
    .catch(() => process.exit(1))
