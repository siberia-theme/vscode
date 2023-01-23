exports.markdown = function (color, syntax) {
    return [
        {
            scope: [ 'punctuation.definition.heading.markdown' ],
            settings: { foreground: color.cyan }
        },
        {
            scope: [ 'entity.name.section.markdown' ],
            settings: { foreground: color.cyan }
        },
        {
            scope: [ 'markup.underline.link.markdown' ],
            settings: { foreground: syntax.string }
        }
    ]
}