exports.other = function(color, syntax) {
    return [
        // Dockerfile
        {
            scope: [ 'keyword.other.special-method.dockerfile' ],
            settings: { foreground: color.cyan }
        },

        // ini
        {
            scope: [ 'entity.name.section.group-title.ini' ],
            settings: { foreground: color.cyan }
        },

        // yaml
        {
            scope: [ 'entity.name.tag' ],
            settings: { foreground: color.cyan }
        }, {
            scope: [ 'string.unquoted.plain.out.yaml' ],
            settings: { foreground: color.green }
        },

        // Makefile
        {
            scope: [ 'entity.name.function.target.makefile' ],
            settings: { foreground: color.cyan }
        },

        // env files
        {
            scope: [ 'variable.other.env' ],
            settings: { foreground: color.cyan }
        },

        // justfile
        {
            scope: [ 'entity.name.function.just' ],
            settings: { foreground: color.blue }
        },

        // CSS
        {
            scope: [
                'entity.other.attribute-name.class.css',
                'entity.other.attribute-name.id.css'
            ],
            settings: { foreground: color.blue }
        },
    ];
}