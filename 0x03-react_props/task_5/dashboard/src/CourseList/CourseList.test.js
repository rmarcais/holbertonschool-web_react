import React from "react";
import { shallow } from 'enzyme';
import CourseList from "./CourseList";

describe('Tests the CourseList component', () => {
    it('Tests that CourseList renders without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Tests that the first row has been render', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
});
