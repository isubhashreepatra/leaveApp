import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
        this.setState({
          error: error.reason
        });
      } else {
        this.props.history.push('/')
      }
    });
  }

  redirectToRegister(){
    this.props.history.push('/register');
  }

  render() {
    return (
      <div className="limiter">
    		<div className="container-login100">
    			<div className="wrap-login100 p-t-85 p-b-20">
    				<form className="login100-form validate-form">
                <span className="login100-form-avatar">
      						<img src="/images/logo.png"></img>
      					</span>
                <span className="login100-form-title p-t-20">
      						Employee Leave Portal
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
                <div className="login-more p-t-20">
      						{this.state.error? this.state.error: ''}
      					</div>

      					<div className="login-more p-t-150">
    							<span className="txt1">
    								Don’t have an account?
    							</span>
                  <Link to='/register'>
      							<li href="#" className="txt2" onClick={()=>this.redirectToRegister()}>
      								Sign up
      							</li>
                  </Link>
			         </div>
    				</form>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default Login;
