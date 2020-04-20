import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Register extends Component {
  handleRegisterEvent(event) {
    event.preventDefault();
    //Meteor call insert data
  }

  render() {
    return (
      <div className="limiter">
    		<div className="container-login100">
    			<div className="wrap-login100 p-t-85 p-b-20">
    				<form className="login100-form validate-form">
      					<span className="login100-form-title p-b-70">
      						Welcome
      					</span>
                <span className="login100-form-avatar">
      						<img src="/images/logo.png"></img>
      					</span>
      					<div className="wrap-input100 validate-input m-t-85 m-b-35">
      						<input className="input100" type="email" name="emailid"></input>
      						<span className="focus-input100" data-placeholder="Email Id"></span>
      					</div>

      					<div className="wrap-input100 validate-input m-b-50">
      						<input className="input100" type="password" name="password"></input>
      						<span className="focus-input100" data-placeholder="Password"></span>
      					</div>

      					<div className="container-login100-form-btn">
      						<button className="login100-form-btn" onClick={this.handleRegisterEvent.bind(this)}>
      							Login
      						</button>
      					</div>
    				</form>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default withRouter(Register);
