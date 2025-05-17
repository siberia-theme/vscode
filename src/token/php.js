exports.php = function(palette) {
    return [
        {
            scope: [ 'punctuation.definition.variable.php' ],
            settings: { foreground: palette.fgMuted }
        },
        {
            scope: [ 'keyword.operator.type' ],
            settings: { foreground: palette.special }
        },
        {
            scope: [ 'punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php' ],
            settings: { foreground: palette.blueDark }
        },
        {
            scope: [ 'keyword.other.use.php', 'storage.type.function.php', 'storage.type.class.php' ],
            settings: { foreground: palette.storage }
        },
        {
            scope: [ 'meta.function.parameter.typehinted.php' ],
            settings: { foreground: palette.type }
        },
        {
            scope: [
                'meta.class.body.php',
                'support.class.php',
                'support.class.builtin.php',
                'entity.other.alias.php',
                'storage.type.php'
            ],
            settings: { foreground: palette.class }
        },
        {
            scope: [ 'meta.attribute.php' ],
            settings: { foreground: palette.special }
        },
        {
            scope: [ 'keyword.operator.nullable-type.php' ],
            settings: { foreground: palette.cyanBright }
        },
        {
            scope: [
                'meta.attribute.php entity.name.variable.parameter.php',
                'meta.attribute.php support.other.namespace.php',
                'meta.attribute.php keyword.other.class',
                'entity.name.goto-label.php',
                'meta.class.php',
                'meta.method-call.php constant.other.php'
            ],
            settings: { foreground: palette.fgSubtle }
        },
        {
            scope: [
                'meta.attribute.php support.attribute.php',
                'meta.other.type.phpdoc.php support.class.php',
                'meta.other.type.phpdoc.php support.class.builtin.php',
                'meta.other.type.phpdoc.php keyword.other.type.php'
            ],
            settings: { foreground: palette.fgSubtle }
        },
        {
            scope: [
                'support.other.namespace.php',
                'keyword.other.class.php',
            ],
            settings: { foreground: palette.fg }
        },
        {
            scope: [ 'entity.name.function.php' ],
            settings: { foreground: palette.method }
        },
        {
            scope: [
                'meta.method-call.php constant.other.php',
                'meta.attribute.php entity.name.variable.parameter.php',
                'entity.name.goto-label.php',
            ],
            settings: { fontStyle: 'italic' }
        }
    ];
}