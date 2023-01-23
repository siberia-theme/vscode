exports.js = function(color, syntax) {
    return [
        {
            scope: [
                'storage.type.js',
                'storage.type.interface.js',
                'storage.type.class.js'
            ],
            settings: { foreground: syntax.storage }
        },
        {
            scope: [ 'support.type.object.module.js' ],
            settings: { foreground: color.blue }
        }
    ];
}