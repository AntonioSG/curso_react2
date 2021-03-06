import * as type from '../actions/actionsTypes';
import InitialState from './initialState';

export default function courseReducer(state = InitialState.courses, action) {

  switch (action.type){
    case type.LOAD_COURSES_SUCCESS:
      return action.courses;

    case type.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case type.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
