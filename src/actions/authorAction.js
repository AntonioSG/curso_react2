import * as type from './actionsTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors){
  return { type: type.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
