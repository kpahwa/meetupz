import axios from 'axios';

function addMeetups(data) {
  return axios.post('https://meetupss.herokuapp.com/api/meetups', data).then().catch((err) => console.log(err));
}

module.exports = {
  addMeetups
}

