import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './main.html';
import LeaveApplicationForm from './components/leave-application-form';


//Main.js is the place where I will assembel all the components and then display
// to the client
//Here i will set up the routes which will be called by Meteor.startup

Meteor.startup(() => {
    ReactDOM.render(<LeaveApplicationForm />, document.querySelector('.container'));
});
