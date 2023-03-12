const { lightness } = require('../base/util');

exports.typescript = function(color, syntax) {
    return [
        // ts
        {
            scope: [ 'keyword.operator.new.ts', ],
            settings: { foreground: color.blue }
        },
        {
            scope: [ 'entity.name.type.alias.ts', 'entity.name.type.enum.ts', 'entity.name.type.ts' ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [
                'storage.type.ts',
                'keyword.operator.expression',
                'storage.type.interface.ts',
                'storage.type.class.ts'
            ],
            settings: { foreground: syntax.storage }
        },

        // tsx
        {
            scope: [ 'storage.type.tsx' ],
            settings: { foreground: syntax.storage }
        },
        {
            scope: [ 'entity.name.tag.tsx' ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [ 'entity.name.type', 'support.type.primitive' ],
            settings: { foreground: syntax.type }
        },
        {
            scope: [ 'string.quoted.single.tsx', 'string.quoted.double.tsx' ],
            settings: { fontStyle: '' }
        },
        {
            scope: [ 'entity.other.attribute-name.tsx'  ],
            settings: { foreground: color.fg }
        },
    ]
}