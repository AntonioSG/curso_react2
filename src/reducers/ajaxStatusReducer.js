import * as type from '../actions/actionsTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numberAjaxCallInProgress, action) {
  if(action.type ===  type.BEGIN_AJAX_CALL){
    return state + 1;
  }else if (action.type === type.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
