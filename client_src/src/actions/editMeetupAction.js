import axios from 'axios';

function editMeetups(id, data) {
  return axios.put(`https://meetupss.herokuapp.com/meetups/${id}`, data).then().catch((err) => console.log(err));
}

module.exports = {
  editMeetups
}

