import {combineReducer} from 'react';
import courses from './courseReducer';

const rootReducer = combineReducer({
  courses
});

export default rootReducer;
