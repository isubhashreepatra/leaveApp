import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Accounts from './accounts';

class Header extends Component {
  render(){
    return (
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
              <ul className='nav navbar-nav'>
                <Link to="/apply" className='navbar-brand'>Apply</Link>
                <Link to="/status" className='navbar-brand'>Status</Link>
                <li className='navbar-brand'><Accounts /></li>
              </ul>
          </div>
        </nav>
    );
  }
}

export default Header;
