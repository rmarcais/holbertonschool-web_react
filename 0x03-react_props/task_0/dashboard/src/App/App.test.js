import React from 'react';
import { shallow } from 'enzyme';
import App from "./App";

describe('Tests the App component', () => {
    it('Tests that App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
});
