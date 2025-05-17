exports.asciidoc = function (palette) {
    return [
        {
            scope: [ 'markup.heading.marker.asciidoc' ],
            settings: { foreground: palette.cyan }
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
            settings: { foreground: palette.cyan }
        },
        {
            scope: [ 'markup.list.bullet.asciidoc' ],
            settings: { foreground: palette.fgMuted }
        },
        {
            scope: [ 'markup.link.asciidoc' ],
            settings: { foreground: palette.string }
        },
        {
            scope: [ 'entity.name.function.asciidoc' ],
            settings: { foreground: palette.blue }
        }
    ];
}