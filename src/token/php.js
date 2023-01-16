exports.php = function(color, syntax) {
    return [
        // php
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
    ];
}