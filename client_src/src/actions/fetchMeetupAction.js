import { FETCH_MEETUPS, FETCH_MEETUPSID } from '../types';
import store from '../store';
import axios from 'axios';

const { dispatch } = store;

function fetchMeetups() {
  return axios.get('https://meetupss.herokuapp.com/api/meetups').then((res) => {
      dispatch({
        type: FETCH_MEETUPS,
        payload: res.data
      })
  }).catch((err) => console.log(err));
}
function fetchMeetupsById(id) {
  return axios.get(`https://meetupss.herokuapp.com/api/meetups/${id}`).then((res) => {
    dispatch({
      type: FETCH_MEETUPSID,
      payload: res.data
    })
  });
}

module.exports = {
  fetchMeetups,
  fetchMeetupsById
}

