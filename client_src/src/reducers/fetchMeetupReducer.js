import { FETCH_MEETUPS, FETCH_MEETUPSID } from '../types';

const initialState = {
  meetups: [],
  meetupDetails: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEETUPS:
      return {
        ...state,
        meetups: action.payload
      }
    case FETCH_MEETUPSID:
      return {
        ...state,
        meetupDetails: action.payload
      }
    default:
      return state;
  }
}