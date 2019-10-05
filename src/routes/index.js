import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';
import NewMeetup from '~/pages/NewMeetup';
import EditMeetup from '~/pages/EditMeetup';
import MeetupDetail from '~/pages/MeetupDetail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />

      <Route path="/profile" exact component={Profile} isPrivate />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />

      <Route path="/meetups/new" exact component={NewMeetup} isPrivate />
      <Route
        path="/meetup/:id/detail"
        exact
        component={MeetupDetail}
        isPrivate
      />
      <Route path="/meetup/:id/edit" exact component={EditMeetup} isPrivate />
    </Switch>
  );
}
