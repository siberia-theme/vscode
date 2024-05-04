exports.php = function(color, syntax) {
    return [
        {
            scope: [ 'punctuation.definition.variable.php' ],
            settings: { foreground: color.fgMuted }
        },
        {
            scope: [ 'keyword.operator.type' ],
            settings: { foreground: color.special }
        },
        {
            scope: [ 'punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php' ],
            settings: { foreground: color.blueDark }
        },
        {
            scope: [ 'keyword.other.use.php', 'storage.type.function.php', 'storage.type.class.php' ],
            settings: { foreground: color.blue }
        },
        {
            scope: [ 'meta.function.parameter.typehinted.php' ],
            settings: { foreground: syntax.type }
        },
        {
            scope: [
                'meta.class.body.php',
                'support.class.php',
                'support.class.builtin.php',
                'entity.other.alias.php',
                'storage.type.php'
            ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [ 'meta.attribute.php' ],
            settings: { foreground: color.orange }
        },
        {
            scope: [ 'keyword.operator.nullable-type.php' ],
            settings: { foreground: color.cyanBright }
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
            settings: { foreground: color.fgMuted }
        },
        {
            scope: [
                'meta.attribute.php support.attribute.php',
                'meta.other.type.phpdoc.php support.class.php',
                'meta.other.type.phpdoc.php support.class.builtin.php',
                'meta.other.type.phpdoc.php keyword.other.type.php'
            ],
            settings: { foreground: color.fgSubtle }
        },
        {
            scope: [
                'support.other.namespace.php',
                'keyword.other.class.php',
            ],
            settings: { foreground: color.fg }
        },
        {
            scope: [ 'entity.name.function.php' ],
            settings: { foreground: syntax.method }
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