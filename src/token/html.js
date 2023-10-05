exports.html = function(color, syntax) {
    return [
        {
            scope: [ 'string.quoted.double.html', 'string.quoted.single.html' ],
            settings: { fontStyle: '' }
        },
    ];
}