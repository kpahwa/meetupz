import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups';
import MeetupDetails from './MeetupDetails';
import About from './About';
import AddMeetup from './AddMeetup';
import EditMeetup from './EditMeetup';

const main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Meetups} />
      <Route path="/about" component={About} />
      <Route path="/meetups/add" component={AddMeetup} />
      <Route path="/meetups/edit/:id" component={EditMeetup} />
      <Route path="/meetups/:id" component={MeetupDetails} />
    </Switch>
  </main>
);

export default main;