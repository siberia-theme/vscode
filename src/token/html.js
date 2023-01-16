exports.html = function(color, syntax) {
    return [
        // html
        {
            scope: [ 'entity.name.tag.html' ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [ 'string.quoted.double.html', 'string.quoted.single.html' ],
            settings: { fontStyle: '' }
        },
    ];
}