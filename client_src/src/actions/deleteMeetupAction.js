import axios from 'axios';

function deleteMeetups(id) {
  return axios.delete(`https://meetupss.herokuapp.com/api/meetups/${id}`).then().catch((err) => console.log(err));
}

module.exports = {
  deleteMeetups
}

