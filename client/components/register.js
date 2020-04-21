import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ""
    }
  }

  handleRegisterEvent(e) {
    e.preventDefault();

    var name = this.refs.registerName.value;
    var email = this.refs.registerEmailid.value;
    var password = this.refs.registerPassword.value;

    this.setState({error: "test"});
    Accounts.createUser({email: email, username: name, password: password}, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push('/login');
      }
    });
  }

  redirectToLogin(){
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
                <div className="wrap-input100 validate-input  m-t-85 m-b-35">
      						<input className="input100" type="text" ref="registerName"></input>
      						<span className="focus-input100" data-placeholder="Name"></span>
      					</div>
      					<div className="wrap-input100 validate-input m-b-35">
      						<input className="input100" type="email" ref="registerEmailid"></input>
      						<span className="focus-input100" data-placeholder="Email Id"></span>
      					</div>
      					<div className="wrap-input100 validate-input m-b-80">
      						<input className="input100" type="password" ref="registerPassword"></input>
      						<span className="focus-input100" data-placeholder="Password"></span>
      					</div>

      					<div className="container-login100-form-btn">
      						<button className="login100-form-btn" onClick={this.handleRegisterEvent.bind(this)}>
      							Register
      						</button>
      					</div>
                <div className="login-more p-t-20">
      						{this.state.error? this.state.error: ''}
      					</div>

                <div className="login-more p-t-150">
    							<span className="txt1">
    								Already have an account?
    							</span>
                  <Link to='/login'>
      							<li href="#" className="txt2" onClick={()=>this.redirectToLogin()}>
      								Login
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

export default Register;
