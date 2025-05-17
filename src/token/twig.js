exports.twig = function (palette) {
    return [
        {
            scope: [ 'punctuation.section.tag.twig' ],
            settings: { foreground: palette.blueDark }
        },
        {
            scope: [
                'keyword.operator.logical.twig',
            ],
            settings: { foreground: palette.special }
        },
        {
            scope: [ 'meta.function-call.other.twig' ],
            settings: { foreground: palette.fgBright }
        },
        {
            scope: [ 'meta.function-call.twig' ],
            settings: { foreground: palette.fgBright }
        },
    ];
}