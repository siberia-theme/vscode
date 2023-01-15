const { lightness } = require('../base/util');

exports.git = function(color) {
    return {
        'gitDecoration.addedResourceForeground': color.green,
        'gitDecoration.modifiedResourceForeground': color.yellow,
        'gitDecoration.deletedResourceForeground': color.red,
        'gitDecoration.renamedResourceForeground': color.fg,
        'gitDecoration.stageModifiedResourceForeground': color.yellow,
        'gitDecoration.stageDeletedResourceForeground': color.red,
        'gitDecoration.untrackedResourceForeground': color.cyan,
        'gitDecoration.ignoredResourceForeground': lightness(color.bg, 16),
        'gitDecoration.conflictingResourceForeground': color.red,
        // 'gitDecoration.submoduleResourceForeground': color.red
    }
}