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
    ];
}