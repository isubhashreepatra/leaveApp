import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { withRouter } from 'react-router-dom';

class Accounts extends Component {
  componentDidMount() {
    this.view = Blaze.render( Template.loginButtons, ReactDOM.findDOMNode(this.refs.loginContainer));
    var pathname = this.props.history.location.pathname.toString();
    if(pathname !== '/'){
      this.props.history.replace('/');
    }
  };

  componentWillUnmount() {
    Blaze.remove(this.view);
  };

  render() {
    return (
      <div ref='loginContainer'>

      </div>
    );
  };

}

export default withRouter(Accounts);
