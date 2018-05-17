import { combineReducers } from 'redux';
import fetchMeetupReducer from './fetchMeetupReducer';

export default combineReducers({
  fetchmeetups: fetchMeetupReducer
});
