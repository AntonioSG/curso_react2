import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../components/course/courseForm';

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("CourseForm via React test Utils", () => {

  it("renders form and h2", function () {
    const {output} = setup();
    expect(output.type).toBe("form");

    let [h2] = output.props.children;
    expect(h2.type).toBe("h2");
  });

  it("save button labeled 'Guardar' when not saving", function () {
    const {output} = setup(false);
    const submitButtom = output.props.children[5];
    expect(submitButtom.props.value).toBe("Guardar");
  });

  it("save button labeled 'Guardando...' when saving", function () {
    const {output} = setup(true);
    const submitButtom = output.props.children[5];
    expect(submitButtom.props.value).toBe("Guardando...");
  });

});
