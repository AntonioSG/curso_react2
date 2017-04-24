import * as type from '../actions/actionsTypes';
import InitialState from './initialState';

export default function authorReducer(state = InitialState.authors, action) {
  switch (action.type){
    case type.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
