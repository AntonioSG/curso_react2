import expect from 'expect';
import {authorsFormattedForDropdown} from '../selectors/selectors';

describe("Author Selector", () => {
  describe("authorsFormattedForDropDown", () => {
    it("should return author data formatted for use in a dropdown", function () {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: "scott-allen", text: 'Scott Allen'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
