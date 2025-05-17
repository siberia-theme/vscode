exports.typescript = function(palette) {
    return [
        // ts
        {
            scope: [ 'keyword.operator.new.ts', ],
            settings: { foreground: palette.blue }
        },
        {
            scope: [ 'entity.name.type.alias.ts', 'entity.name.type.enum.ts', 'entity.name.type.ts' ],
            settings: { foreground: palette.class }
        },
        {
            scope: [
                'storage.type.ts',
                'keyword.operator.expression',
                'storage.type.interface.ts',
                'storage.type.class.ts'
            ],
            settings: { foreground: palette.storage }
        },

        // tsx
        {
            scope: [ 'storage.type.tsx' ],
            settings: { foreground: palette.storage }
        },
        {
            scope: [ 'entity.name.tag.tsx' ],
            settings: { foreground: palette.class }
        },
        {
            scope: [ 'entity.name.type', 'support.type.primitive' ],
            settings: { foreground: palette.type }
        },
        {
            scope: [ 'string.quoted.single.tsx', 'string.quoted.double.tsx' ],
            settings: { fontStyle: '' }
        },
        {
            scope: [ 'entity.other.attribute-name.tsx'  ],
            settings: { foreground: palette.fg }
        },
    ]
}