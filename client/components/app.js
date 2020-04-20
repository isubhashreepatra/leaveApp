import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Header from './header';
import Accounts from './accounts';
import LeaveApplicationForm from './leave-application-form';
import Login from './login';
import Register from './register';

class App extends Component {
  render(){
    return (
        <div>
          {!this.props.currentUser ? <Login /> : <Header />}
        </div>
    );
  };
}

export default withTracker(()=> {
  return { currentUser: Meteor.user()};
})(App);
