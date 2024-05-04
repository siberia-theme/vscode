exports.twig = function (color, syntax) {
    return [
        {
            scope: [ 'punctuation.section.tag.twig' ],
            settings: { foreground: color.blueDark }
        },
        {
            scope: [ 'keyword.operator.other.twig' ],
            settigns: { foreground: color.blueDark }
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
        }
    ];
}