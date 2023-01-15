const { lightness } = require('../base/util');

exports.notification = function(color) {
    return {
        'notificationCenter.border': '#00000000',
        // 'notificationCenterHeader.foreground': '',
        'notificationCenterHeader.background': lightness(color.bg, -2),
        'notificationToast.border': '#00000000',
        // 'notifications.foreground': '',
        'notifications.background': lightness(color.bg, -2),
        'notifications.border': '#00000000',
        // 'notificationLink.foreground': '',
        // 'notificationsErrorIcon.foreground': '',
        // 'notificationsWarningIcon.foreground': '',
        // 'notificationsInfoIcon.foreground': ''
    }
}