import { SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import {
    LOGIN,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER
} from "../actions/uiActionTypes";
import { Map } from 'immutable';

export const appInitialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null
};

export function uiReducer(state = Map(appInitialState), action) {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN:
            return state.set('user', action.user);
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);
        case LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);
        case LOGOUT:
            const updatedState = state.withMutations((state) => {
                state.set('isUserLoggedIn', false),
                state.set('user', null)
            });
            return updatedState;
        default:
            return state;
    }
}
