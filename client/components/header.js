import React,{ Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Accounts from './accounts';

class Header extends Component {

  render(){
    return (
        <nav className='navbar navbar-inverse bg-light'>
          <div className='container-fluid'>
              <ul className='nav navbar-nav'>
                <Link to="/apply" className='navbar-brand'>Apply</Link>
                <Link to="/status" className='navbar-brand'>Status</Link>
                <Link to="/" className='navbar-brand'><Accounts /></Link>
              </ul>
          </div>
        </nav>
    );
  }
}

export default withRouter(Header);
