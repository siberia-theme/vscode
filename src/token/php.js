exports.php = function(color, syntax) {
    return [
        {
            scope: [ 'punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php' ],
            settings: { foreground: color.cyanBright }
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
                'support.function',
                'entity.other.alias.php'
            ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [ 'meta.attribute.php' ],
            settings: { foreground: color.orange }
        },
        {
            scope: [
                'meta.attribute.php entity.name.variable.parameter.php',
                'meta.attribute.php support.other.namespace.php',
                'meta.attribute.php keyword.other.class',
                'meta.attribute.php support.attribute.php',
                'entity.name.goto-label.php',
                'meta.class.php',
            ],
            settings: { foreground: color.fgDimmed }
        },
        {
            scope: [
                'support.other.namespace.php',
                'keyword.other.class.php'
            ],
            settings: { foreground: color.fg }
        }
    ];
}