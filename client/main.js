import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './main.html';
import App from './components/app';
import LeaveApplicationForm from './components/leave-application-form';
import LeavesList from './components/leaves-list';
import Accounts from './components/accounts';
import Header from './components/header';
import '../imports/configurations/accounts-config';

const routes = (
   <Router>
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={Accounts} />
          <Route path="/apply" component={LeaveApplicationForm} />
          <Route path="/status" component={LeavesList} />
        </Switch>
   </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container'));
});
