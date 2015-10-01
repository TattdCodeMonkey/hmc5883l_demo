import { combineReducers } from 'redux';
import { RECEIVE_HEADING } from '../actions';

function compass(state = {}, action) {
  switch(action.type) {
    case RECEIVE_HEADING:
      return {
        ...state,
        degrees: action.heading
      };
    default:
      return state;
  }
}

export function getHeading(state) {
  return state.compass.degrees;
}

export default compass;
