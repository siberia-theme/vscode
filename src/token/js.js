exports.js = function(palette) {
    return [
        {
            scope: [
                'storage.type.js',
                'storage.type.interface.js',
                'storage.type.class.js'
            ],
            settings: { foreground: palette.storage }
        },
        {
            scope: [ 'support.type.object.module.js' ],
            settings: { foreground: palette.blue }
        },
        {
            scope: [ 'keyword.operator.new.js' ],
            settings: { foreground: palette.blue }
        },
    ];
}