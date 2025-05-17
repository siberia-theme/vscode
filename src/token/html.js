exports.html = function(palette) {
    return [
        {
            scope: [ 'string.quoted.double.html', 'string.quoted.single.html' ],
            settings: { fontStyle: '', foreground: palette.fgBright }
        },
    ];
}