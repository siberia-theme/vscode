const { lightness } = require('../base/util');

exports.general = function(color, syntax) {
    return [
        {
            scope: [ 'comment', 'string.comment', 'comment.block', 'punctuation.definition.comment' ],
            settings: { foreground: syntax.comment },
        },
        {
            scope: [ 'comment' ],
            settings: { fontStyle: 'italic' }
        },
        {
            scope: [ 'constant.numeric' ],
            settings: { foreground: syntax.number },
        },
        {
            scope: [ 'constant.language' ],
            settings: { foreground: syntax.languageConstant }
        },
        {
            scope: [ 'constant.other' ],
            settings: { foreground: syntax.constant },
        },
        {
            scope: [ 'storage.modifier' ],
            settings: { foreground: syntax.storage }
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
            settings: { foreground: color.fgSubtle }
        },
        {
            scope: ['keyword.operator.ternary', 'keyword.operator.null-coalescing'],
            settings: { foreground: color.special }
        },
        {
            scope: [ 'variable' ],
            settings: { foreground: syntax.variable }
        },
        {
            scope: [ 'variable.other.property' ],
            settings: { foreground: syntax.property }
        },
        {
            scope: [ 'string.quoted' ],
            settings: { foreground: syntax.string, fontStyle: 'italic' }
        },
        {
            scope: [
                'entity.name.type.class',
                'entity.other.inherited-class',
            ],
            settings: { foreground: syntax.class }
        },
        {
            scope: [ 'meta.method-call', 'support.function' ],
            settings: { foreground: syntax.method }
        },
        {
            scope: [ 'keyword.other.type', 'support.type.primitive' ],
            settings: { foreground: syntax.type }
        },
        {
            scope: [ 'keyword.control' ],
            settings: { foreground: syntax.control }
        },
        {
            scope: [ 'keyword.operator.logical' ],
            settings: { foreground: color.special }
        },
        {
            scope: [ 'meta.decorator' ],
            settings: { foreground: color.yellow }
        },
        {
            scope: [
                'keyword.other.new',
                'keyword.operator.new',
                'entity.name.tag'
            ],
            settings: { foreground: color.blue }
        },
        {
            scope: [ 'string.regexp' ],
            settings: { foreground: color.greenDark }
        },
    ]
}