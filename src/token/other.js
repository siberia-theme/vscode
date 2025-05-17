exports.other = function(palette) {
    return [
        // Dockerfile
        {
            scope: [ 'keyword.other.special-method.dockerfile' ],
            settings: { foreground: palette.cyan }
        },

        // ini
        {
            scope: [ 'entity.name.section.group-title.ini' ],
            settings: { foreground: palette.cyan }
        },

        // yaml
        {
            scope: [ 'entity.name.tag.yaml' ],
            settings: { foreground: palette.blue }
        }, {
            scope: [ 'string.unquoted.plain.out.yaml' ],
            settings: { foreground: palette.fg }
        },

        // Makefile
        {
            scope: [ 'entity.name.function.target.makefile' ],
            settings: { foreground: palette.cyan }
        },

        // env files
        {
            scope: [ 'variable.other.env' ],
            settings: { foreground: palette.blue }
        },

        // justfile
        {
            scope: [ 'entity.name.function.just' ],
            settings: { foreground: palette.blue }
        },

        // CSS
        {
            scope: [
                'entity.other.attribute-name.class.css',
                'entity.other.attribute-name.id.css'
            ],
            settings: { foreground: palette.blue }
        },
    ];
}