import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe('UI Action creators tests', () => {
    it('Tests the login action', () => {
        expect(login('hello@world.com', 'Test123!')).toEqual({
            type: LOGIN,
            user : {
                email: 'hello@world.com',
                password: 'Test123!'
            }
        });
    });
    it('Tests the logout action', () => {
        expect(logout()).toEqual({ type: LOGOUT });
    });
    it('Tests the displayNotificationDrawer action', () => {
        expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
    });
    it('Tests the hideNotificationDrawer action', () => {
        expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
    });
});
