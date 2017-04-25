import * as type from './actionsTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadCoursesSuccess(courses){
  return { type: type.LOAD_COURSES_SUCCESS, courses};
}

export function updateCourseSuccess(course) {
  return {type: type.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
  return {type: type.CREATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
