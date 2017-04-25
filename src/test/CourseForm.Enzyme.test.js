import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtil from 'react-addons-test-utils';
import CourseForm from '../components/course/courseForm';

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>);
}

describe("CourseForm via Enzyme", function () {

  it("renders form and h2", function () {
    const wrapper = setup(false);
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find("h2").text()).toEqual("Administrar cursos");
  });

  it("save button labeled 'Guardar' when not saving", function () {
    const wrapper = setup(false);
    expect(wrapper.find("input").props().value).toBe("Guardar");
  });

  it("save button labeled 'Guardando...' when saving", function () {
    const wrapper = setup(true);
    expect(wrapper.find("input").props().value).toBe("Guardando...");
  });

});
