const { lightness } = require('../base/util');

exports.general = function(palette) {
    return [
        {
            scope: [ 'comment', 'string.comment', 'comment.block', 'punctuation.definition.comment' ],
            settings: { foreground: palette.comment },
        },
        {
            scope: [ 'comment' ],
            settings: { fontStyle: 'italic' }
        },
        {
            scope: [ 'constant.numeric' ],
            settings: { foreground: palette.number },
        },
        {
            scope: [ 'constant.language' ],
            settings: { foreground: palette.languageConstant }
        },
        {
            scope: [ 'constant.other' ],
            settings: { foreground: palette.constant },
        },
        {
            scope: [ 'storage.modifier' ],
            settings: { foreground: palette.storage }
        },
        {
            scope: [
                'punctuation.definition.parameters',
                'punctuation.definition.arguments',
                'punctuation.definition.begin',
                'punctuation.definition.end',
                'punctuation.terminator',
                'punctuation.section',
                'punctuation.definition.storage-type',
                'meta.brace',
                'keyword.operator',
                'keyword.operator.type.annotation'
            ],
            settings: { foreground: palette.fgSubtle }
        },
        {
            scope: ['keyword.operator.ternary', 'keyword.operator.null-coalescing'],
            settings: { foreground: palette.special }
        },
        {
            scope: [ 'variable' ],
            settings: { foreground: palette.variable }
        },
        {
            scope: [ 'variable.other.property' ],
            settings: { foreground: palette.property }
        },
        {
            scope: [ 'string.quoted' ],
            settings: { foreground: palette.string, fontStyle: 'italic' }
        },
        {
            scope: [
                'entity.name.type.class',
                'entity.other.inherited-class',
            ],
            settings: { foreground: palette.class }
        },
        {
            scope: [ 'meta.method-call', 'support.function' ],
            settings: { foreground: palette.method }
        },
        {
            scope: [ 'keyword.other.type', 'support.type.primitive' ],
            settings: { foreground: palette.type }
        },
        {
            scope: [ 'keyword.control' ],
            settings: { foreground: palette.control }
        },
        {
            scope: [ 'keyword.operator.logical' ],
            settings: { foreground: palette.special }
        },
        {
            scope: [ 'meta.decorator' ],
            settings: { foreground: palette.yellow }
        },
        {
            scope: [
                'keyword.other.new',
                'keyword.operator.new',
                'entity.name.tag'
            ],
            settings: { foreground: palette.blue }
        },
        {
            scope: [ 'string.regexp' ],
            settings: { foreground: palette.greenDark }
        },
    ]
}