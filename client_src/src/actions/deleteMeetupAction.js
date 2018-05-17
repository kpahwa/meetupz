import axios from 'axios';

function deleteMeetups(id) {
  return axios.delete(`http://localhost:3000/api/meetups/${id}`).then().catch((err) => console.log(err));
}

module.exports = {
  deleteMeetups
}

