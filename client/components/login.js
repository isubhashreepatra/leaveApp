import React, { Component } from 'react';
import { Link, useHistory, withRouter, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }

  handleLoginEvent(e){
    e.preventDefault();
    var emailVar = this.refs.emailid.value;
    var passwordVar = this.refs.password.value;
    Meteor.loginWithPassword(emailVar, passwordVar, (error)=>{
      if (error) {
        console.log(error.reason);
        this.setState({
          error: error.reason
        });
      }
    });
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
      						<input className="input100" type="email" ref="emailid" placeholder="Email Id"></input>
      					</div>

      					<div className="wrap-input100 validate-input m-b-50">
      						<input className="input100" type="password" ref="password" placeholder="Password"></input>
      					</div>

      					<div className="container-login100-form-btn">
      						<button className="login100-form-btn" onClick={this.handleLoginEvent.bind(this)}>
      							Login
      						</button>
      					</div>

      					<ul className="login-more p-t-190">
      						<li className="m-b-8">
      							<span className="txt1">
      								Forgot
      							</span> &nbsp;
      							<a href="#" className="txt2">
      								Username / Password?
      							</a>
      						</li>
      						<li>
      							<span className="txt1">
      								Don’t have an account?
      							</span> &nbsp;
      							<Link to='/register' className="txt2">
      								Sign up
      							</Link>
      						</li>
				         </ul>
    				</form>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default withRouter(Login);
