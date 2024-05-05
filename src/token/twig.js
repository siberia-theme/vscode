exports.twig = function (color, syntax) {
    return [
        {
            scope: [ 'punctuation.section.tag.twig' ],
            settings: { foreground: color.blueDark }
        },
        {
            scope: [
                'keyword.operator.logical.twig',
            ],
            settings: { foreground: color.special }
        },
        {
            scope: [ 'meta.function-call.other.twig' ],
            settings: { foreground: color.fgBright }
        },
        {
            scope: [ 'meta.function-call.twig' ],
            settings: { foreground: color.fgBright }
        },
    ];
}