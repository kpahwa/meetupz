import React, { Component } from 'react';
import MeetupItems from './MeetupItems';
import { connect } from 'react-redux';
import actions from '../actions';

@connect((state) => state)
class Meetups extends Component{
  componentWillMount(){
    actions.fetchMeetups();
  }
  render(){
    console.log(this.props);
    const { fetchmeetups } = this.props;
    let meetupItems = fetchmeetups.meetups.map((item, key) => {
      return <MeetupItems meetup={item} key={item.id}/>
    });
    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">
          {meetupItems}
        </ul>
      </div>
    );
  }
}

export default Meetups;