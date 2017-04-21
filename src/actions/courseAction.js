import * as type from './actionsTypes';

export function createCourse(course){
  return { type: type.CREATE_COURSE, course};
}
