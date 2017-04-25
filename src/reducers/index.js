import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import numberAjaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  numberAjaxCallInProgress
});

export default rootReducer;

