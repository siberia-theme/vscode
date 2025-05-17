exports.markdown = function (palette) {
    return [
        {
            scope: [ 'punctuation.definition.heading.markdown' ],
            settings: { foreground: palette.cyan }
        },
        {
            scope: [ 'entity.name.section.markdown' ],
            settings: { foreground: palette.cyan }
        },
        {
            scope: [ 'markup.underline.link.markdown' ],
            settings: { foreground: palette.string }
        }
    ]
}