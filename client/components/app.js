import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import Header from './header';
import Accounts from './accounts';
import LeaveApplicationForm from './leave-application-form';
import Login from './login';
import Register from './register';

class App extends Component {
  render(){
    var currentUser = this.props.currentUser;
    var text =  currentUser ? "Hi! " + currentUser.username : "";
    return (
        <div>
            { currentUser ?
              <div>
                <Header />
                <h1 className="profile-title p-t-20 p-b-5">{text}</h1>
              </div>
              : ""
            }
        </div>
    );
  };
}

export default withTracker(()=> {
  return { currentUser: Meteor.user()};
})(App);
