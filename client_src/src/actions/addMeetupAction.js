import axios from 'axios';

function addMeetups(data) {
  return axios.post('http://localhost:3000/api/meetups', data).then().catch((err) => console.log(err));
}

module.exports = {
  addMeetups
}

