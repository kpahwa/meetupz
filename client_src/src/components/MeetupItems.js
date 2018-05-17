import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MeetupItems extends Component{
  render() {
    const { meetup } = this.props;
    return (
      <div>
        <Link to={`/meetups/${meetup.id}`}><li className="collection-item">{meetup.name}</li></Link>
      </div>
    );
  }
}

export default MeetupItems;