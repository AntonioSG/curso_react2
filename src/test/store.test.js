import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseAction from '../actions/courseAction';

describe("Store", function () {
  it("Should hanlde creating course", function () {
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };

    const action = courseAction.createCourseSuccess(course);
    store.dispatch(action);

    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
