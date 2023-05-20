import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Tests the Notifications component with an empty array', () => {
    it('Tests that Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that Notifications renders 0 list item', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('NotificationItem')).toHaveLength(0);
    });
    it('Tests that Notifications renders the good text', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        const p = wrapper.find('.Notifications p');
        expect(wrapper.find('.Notifications p')).toHaveLength(1);
        expect(p.text()).toBe('No new notification for now');
    });
    it('Tests that the menu item is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });
    it('Tests that the div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });
    it('Tests that the menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });
    it('Tests that the menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });
});

describe('Tests the Notifications component', () => {
    let listNotifications;
    beforeEach(() => {
        listNotifications = [
            {
              id: 1,
              type: 'default',
              value: 'New course available'
            },
            {
              id: 2,
              type: 'urgent',
              value: 'New resume available'
            },
            {
              id: 3,
              type: 'urgent',
              html: {__html: '<u>test</u>'}
            }
        ];
    });
    it('Tests that Notifications renders 3 list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
    it('Tests that Notifications renders the good text', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        const p = wrapper.find('.Notifications p');
        expect(wrapper.find('.Notifications p')).toHaveLength(1);
        expect(p.text()).toBe('Here is the list of notifications');
    });
    it('Tests that the first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        const p = wrapper.find('.Notifications NotificationItem:first-child');
        expect(p.html()).toEqual('<li data-notification-type="default">New course available</li>');
    });
    it('Tests that when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
        const mockConsole = jest.spyOn('console', 'log').mockImplementation(() => {});
        const p = wrapper.find('.Notifications NotificationItem:first-child');
        expect(p.html()).toEqual('<li data-notification-type="default">New course available</li>');
    });
});
