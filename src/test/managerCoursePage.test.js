import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManagerCoursePage} from '../components/course/ManagerCoursePage';

describe("Manage Coruse Page", () => {

  it("sets error menssage when trying to save empty title", function () {
     const props = {
     authors: [],
     actions: {saveCourse: () => {return Promise.resolve();}},
     course:{id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
     };

     const wrapper = mount(<ManagerCoursePage {...props}/>);
     const saveButton = wrapper.find('input').last();
     expect(saveButton.prop('type')).toBe('submit');
     saveButton.simulate("click");

  });

});
