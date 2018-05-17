import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../actions';

@connect((state) => state)
class MeetupDetails extends Component {
  
  componentWillMount() {
    let meetupId = this.props.match.params.id;
    actions.fetchMeetupsById(meetupId);
  }

  onDelete = () => {
    actions.deleteMeetups(this.props.match.params.id).then(() => {
      this.props.history.push('/')
    }).catch((err) => console.log(err));
  }

  render() {
    console.log(this.props.fetchmeetups, 'meeettdsdgg')
    const { meetupDetails } = this.props.fetchmeetups;
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">Back</Link>
        <h1>{meetupDetails.name}</h1>
        <ul className="collection">
          <li className="collection-item">City: {meetupDetails.city}</li>
          <li className="collection-item">Address: {meetupDetails.address}</li>
        </ul>
        <Link to={`/meetups/edit/${this.props.match.params.id}`} className="btn">Edit</Link>
        <button onClick={this.onDelete} className="btn red right">Delete</button>
      </div>
    );
  }
}

export default MeetupDetails;