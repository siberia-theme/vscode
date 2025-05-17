const { lightness } = require('../base/util');

exports.git = function(palette) {
    return {
        'gitDecoration.addedResourceForeground': palette.green,
        'gitDecoration.modifiedResourceForeground': palette.yellow,
        'gitDecoration.deletedResourceForeground': palette.red,
        'gitDecoration.renamedResourceForeground': palette.fg,
        'gitDecoration.stageModifiedResourceForeground': palette.yellow,
        'gitDecoration.stageDeletedResourceForeground': palette.red,
        'gitDecoration.untrackedResourceForeground': palette.cyan,
        'gitDecoration.ignoredResourceForeground': lightness(palette.bg, 16),
        'gitDecoration.conflictingResourceForeground': palette.red,
        // 'gitDecoration.submoduleResourceForeground': color.red
    }
}