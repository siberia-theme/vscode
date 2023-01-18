const { lightness, alpha } = require('../base/util');

exports.editor = function(color) {
     return {
        'editor.background': color.bg,
        'editor.foreground': color.fg,
        'editorLineNumber.foreground': color.fgDimmed,
        'editorLineNumber.activeForeground': color.fgBright,
        'editorCursor.background': color.bg,
        'editorCursor.foreground': lightness(color.bg, 48),
        'editor.selectionBackground': lightness(color.bg, 6),
        // 'editor.selectionForeground': '',
        // 'editor.inactiveSelectionBackground': '',
        // 'editor.selectionHighlightBackground': '',
        // 'editor.selectionHighlightBorder': '',
        'editor.wordHighlightBackground': lightness(color.bg, 4),
        'editor.wordHighlightBorder': lightness(color.bg, 4),
        'editor.wordHighlightStrongBackground': lightness(color.bg, 4),
        'editor.wordHighlightStrongBorder': lightness(color.bg, 4),
        'editor.findMatchBackground': lightness(color.bg, 4),
        'editor.findMatchHighlightBackground': lightness(color.bg, 4),
        'editor.findRangeHighlightBackground': lightness(color.bg, 4),
        // 'editor.findMatchBorder': '',
        // 'editor.findMatchHighlightBorder': '',
        // 'editor.findRangeHighlightBorder': '',

        // 'searchEditor.findMatchBackground': '',
        // 'searchEditor.findMatchBorder': '',
        // 'searchEditor.textInputBorder': '',
        'editor.hoverHighlightBackground': lightness(color.bg, 6),
        'editor.lineHighlightBackground': lightness(color.bg, 2),
        'editor.lineHighlightBorder': lightness(color.bg, 2),
        // 'editorUnicodeHighlight.border': '',
        // 'editorUnicodeHighlight.background': '',
        'editorLink.activeForeground': lightness(color.fg, 4),
        // 'editor.rangeHighlightBackground': '',
        // 'editor.rangeHighlightBorder': '',
        // 'editor.symbolHighlightBackground': '',
        // 'editor.symbolHighlightBorder': '',
        'editorWhitespace.foreground': lightness(color.bg, 4),
        'editorIndentGuide.background': lightness(color.bg, 4),
        'editorIndentGuide.activeBackground': lightness(color.bg, 8),
        // 'editorInlayHint.background': '',
        // 'editorInlayHint.foreground': '',
        // 'editorInlayHint.typeForeground': '',
        // 'editorInlayHint.typeBackground': '',
        // 'editorInlayHint.parameterForeground': '',
        // 'editorInlayHint.parameterBackground': '',
        'editorRuler.foreground': lightness(color.bg, 4) ,
        'editor.linkedEditingBackground': lightness(color.bg, 4),
        'editorCodeLens.foreground': lightness(color.bg, 16),
        'editorLightBulb.foreground': color.yellow,
        // 'editorLightBulbAutoFix.foreground': '',
        'editorBracketMatch.background': lightness(color.bg, 8),
        'editorBracketMatch.border': lightness(color.bg, 8),
        'editorBracketHighlight.foreground1': color.fg,
        'editorBracketHighlight.foreground2': color.fg,
        'editorBracketHighlight.foreground3': color.fg,
        'editorBracketHighlight.foreground4': color.fg,
        'editorBracketHighlight.foreground5': color.fg,
        'editorBracketHighlight.foreground6': color.fg,
        'editorBracketHighlight.unexpectedBracket.foreground': color.red,
        // 'editorBracketPairGuide.activeBackground1': '',
        // 'editorBracketPairGuide.activeBackground2': '',
        // 'editorBracketPairGuide.activeBackground3': '',
        // 'editorBracketPairGuide.activeBackground4': '',
        // 'editorBracketPairGuide.activeBackground5': '',
        // 'editorBracketPairGuide.activeBackground6': '',
        // 'editorBracketPairGuide.background1': '',
        // 'editorBracketPairGuide.background2': '',
        // 'editorBracketPairGuide.background3': '',
        // 'editorBracketPairGuide.background4': '',
        // 'editorBracketPairGuide.background5': '',
        // 'editorBracketPairGuide.background6': '',
        'editor.foldBackground': lightness(color.bg, 8),
        'editorOverviewRuler.background': color.bg,
        'editorOverviewRuler.border': color.bg,
        // 'editorOverviewRuler.findMatchForeground': '',
        // 'editorOverviewRuler.rangeHighlightForeground': '',
        // 'editorOverviewRuler.selectionHighlightForeground': '',
        // 'editorOverviewRuler.wordHighlightForeground': '',
        // 'editorOverviewRuler.wordHighlightStrongForeground': '',
        // 'editorOverviewRuler.modifiedForeground': '',
        // 'editorOverviewRuler.addedForeground': '',
        // 'editorOverviewRuler.deletedForeground': '',
        // 'editorOverviewRuler.errorForeground': '',
        // 'editorOverviewRuler.warningForeground': '',
        // 'editorOverviewRuler.infoForeground': '',
        // 'editorOverviewRuler.bracketMatchForeground': '',
        'editorError.foreground': alpha(color.red, .6),
        // 'editorError.border': color.red,
        // 'editorError.background': alpha(color.red, 1),
        'editorWarning.foreground': color.yellow,
      //   'editorWarning.border': null,
      //   'editorWarning.background': null,
        'editorInfo.foreground': color.blue,
      //   'editorInfo.border': color.blue,
      //   'editorInfo.background': '',
        'editorHint.foreground': color.red,
      //   'editorHint.border': '',
        // 'problemsErrorIcon.foreground': '',
        // 'problemsWarningIcon.foreground': '',
        // 'problemsInfoIcon.foreground': '',
        'editorUnnecessaryCode.border': alpha(lightness(color.bg, 16), .2),
        'editorUnnecessaryCode.opacity': '#00000099',

        'editorGutter.background': color.bg,
        'editorGutter.modifiedBackground': color.yellow,
        'editorGutter.addedBackground': color.green,
        'editorGutter.deletedBackground': color.red,
        // 'editorGutter.commentRangeForeground': '',
        'editorGutter.foldingControlForeground': lightness(color.fg, -32),

        // 'editorCommentsWidget.resolvedBorder': '',
        // 'editorCommentsWidget.unresolvedBorder': '',
        // 'editorCommentsWidget.rangeBackground': '',
        // 'editorCommentsWidget.rangeBorder': '',
        // 'editorCommentsWidget.rangeActiveBackground': '',
        // 'editorCommentsWidget.rangeActiveBorder': '',
     }
}