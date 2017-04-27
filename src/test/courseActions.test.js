import expect from 'expect';
import * as courseActions from '../actions/courseAction';
import * as types from '../actions/actionsTypes';

describe("Course Actions", () => {
  describe("courseActions", () => {
    it("should create a CREATE_COURSE_SUCCESS action", function () {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});
