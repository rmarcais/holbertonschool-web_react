import { FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { courseReducer } from "./courseReducer";

describe('Test suite for courseReducer', () => {
    let fullCourseState;
    beforeAll(() => {
        fullCourseState = [
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
            { id: 3, name: "React", isSelected: false, credit: 40 }
        ];
    });
    it('Tests that the default state returns an empty array', () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });
    it('Tests that FETCH_COURSE_SUCCESS returns the data passed', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
              { id: 1, name: "ES6", credit: 60 },
              { id: 2, name: "Webpack", credit: 20 },
              { id: 3, name: "React", credit: 40 }
            ]
        };
        const expectedState = [
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
            { id: 3, name: "React", isSelected: false, credit: 40 }
        ];
        expect(courseReducer(undefined, action)).toEqual(expectedState);
    });
    it('Tests that SELECT_COURSE returns the data with the right item updated', () => {
        const action = selectCourse(2);
        const expectedState = [
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: true, credit: 20 },
            { id: 3, name: "React", isSelected: false, credit: 40 }
        ];
        expect(courseReducer(fullCourseState, action)).toEqual(expectedState);
    });
    it('Tests that UNSELECT_COURSE returns the data with the right item updated', () => {
        const action = unSelectCourse(2);
        const expectedState = [
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
            { id: 3, name: "React", isSelected: false, credit: 40 }
        ];
        expect(courseReducer(fullCourseState, action)).toEqual(expectedState);
    });
});
