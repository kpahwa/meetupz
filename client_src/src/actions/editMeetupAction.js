import axios from 'axios';

function editMeetups(id, data) {
  return axios.put(`http://localhost:3000/api/meetups/${id}`, data).then().catch((err) => console.log(err));
}

module.exports = {
  editMeetups
}

