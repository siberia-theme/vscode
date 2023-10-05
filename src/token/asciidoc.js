exports.asciidoc = function (color, syntax) {
    return [
        {
            scope: [ 'markup.heading.marker.asciidoc' ],
            settings: { foreground: color.cyan }
        },
        {
            scope: [
                'markup.heading.heading-0.asciidoc',
                'markup.heading.heading-1.asciidoc',
                'markup.heading.heading-2.asciidoc',
                'markup.heading.heading-3.asciidoc',
                'markup.heading.heading-4.asciidoc',
                'markup.heading.heading-5.asciidoc',
            ],
            settings: { foreground: color.cyan }
        },
        {
            scope: [ 'markup.list.bullet.asciidoc' ],
            settings: { foreground: color.fgMuted }
        },
        {
            scope: [ 'markup.link.asciidoc' ],
            settings: { foreground: syntax.string }
        },
        {
            scope: [ 'entity.name.function.asciidoc' ],
            settings: { foreground: color.blue }
        }
    ];
}