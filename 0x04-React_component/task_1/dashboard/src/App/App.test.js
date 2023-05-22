import React from 'react';
import { shallow, mount } from 'enzyme';
import App from "./App";

describe('Tests the App component', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('Tests that App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should contain the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notifications')).toHaveLength(1);
    });
    it('should contain the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header')).toHaveLength(1);
    });
    it('should contain the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login')).toHaveLength(1);
    });
    it('should contain the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer')).toHaveLength(1);
    });
    it('checks that CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });
    it('checks that the logOut function and the alert function is called with the good string', () => {
        const mockLogOut = jest.fn();
        window.alert = jest.fn();
        const wrapper = mount(<App logOut={mockLogOut}/>);
        const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
        window.dispatchEvent(event);
        expect(window.alert).toHaveBeenCalledWith('Logging you out');
        expect(mockLogOut).toHaveBeenCalled();
        jest.restoreAllMocks();
    });
});

describe('Tests the App component when isLoggedIn is true', () => {
    it('Tests that the Login component is not included.', () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.find('Login')).toHaveLength(0);
    });
    it('should contain the Notifications component', () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.find('CourseList')).toHaveLength(1);
    });
});
