import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './main.html';
import App from './components/app';
import LeaveApplicationForm from './components/leave-application-form';
import LeavesList from './components/leaves-list';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';

const routes = (
   <Router>
        <Route component={App} />
        <Switch>
          <Route path="/apply" component={LeaveApplicationForm} />
          <Route path="/status" component={LeavesList} />
        </Switch>
        <Route path='/register' component={Register} />
   </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container'));
});
