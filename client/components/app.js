import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Header from './header';
import Accounts from './accounts';

class App extends Component {
  render(){
    return (
      <div>
      {this.props.currentUser ?
        <Header />: <div>Header won't be displayed</div>
      }
      </div>
    );
  }
}


export default withTracker(()=> {
  return { currentUser: Meteor.user()};
})(App);
