import React from "react";
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

describe('Tests the NotificationItem component', () => {
    it('Tests that NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that by passing dummy type and value props, it renders the correct html', () => {
        const wrapper = shallow(<NotificationItem value='test' type='default' />);
        expect(wrapper.contains(<li data-notification-type='default' dangerouslySetInnerHTML={null}>test</li>)).toBe(true);
    });
    it('Tests that by passing a dummy html prop, it renders the correct html', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
        expect(wrapper.contains(<li dangerouslySetInnerHTML={{ __html: '<u>test</u>' }} data-notification-type='default'></li>)).toBe(true);
    });
});
