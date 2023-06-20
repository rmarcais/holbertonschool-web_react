import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";

export const notificationsState = {
    notifications: [],
    filter: 'DEFAULT'
};

export function notificationReducer(state = notificationsState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const notifFetchSuccess = action.data.map((notif) => ({
                ...notif,
                isRead: false
            }));
            return {
                ...state,
                notifications: notifFetchSuccess
            };
        case MARK_AS_READ:
            const notifMarkAsRead = state.notifications.map((notif) => ({
                ...notif,
                isRead: action.index === notif.id ? true : notif.isRead
            }));
            return {
                ...state,
                notifications: notifMarkAsRead
            };
        case SET_TYPE_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
}
