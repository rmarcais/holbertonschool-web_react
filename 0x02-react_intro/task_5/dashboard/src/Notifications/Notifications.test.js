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
        expect(wrapper.find('li')).toHaveLength(3);
    });
    it('Tests that Notifications renders the good text', () => {
        const wrapper = shallow(<Notifications />);
        const p = wrapper.find('.Notifications p');
        expect(p.text()).toBe('Here is the list of notifications');
    });
});
