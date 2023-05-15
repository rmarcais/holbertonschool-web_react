import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Tests the Notifications component', () => {
    it('Tests that Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
    it('Tests that Notifications renders the good text', () => {
        const wrapper = shallow(<Notifications />);
        const p = wrapper.find('.Notifications p');
        expect(p.text()).toBe('Here is the list of notifications');
    });
    it('Tests that the first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications />);
        const p = wrapper.find('.Notifications NotificationItem:first-child');
        expect(p.html()).toEqual('<li data-notification-type="default">New course available</li>');
    });
});
