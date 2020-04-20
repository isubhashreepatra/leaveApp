import React,{ Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Accounts from './accounts';

class Header extends Component {

  componentDidMount() {
    this.props.history.push(`/apply`);
  };

  componentWillUnmount() {
    console.log('Just checking');
    this.props.history.replace(`/`);
  };

  render(){
    return (
        <nav className='navbar navbar-inverse bg-light'>
          <div className='container-fluid'>
              <ul className='nav navbar-nav'>
                <Link to="/apply" className='navbar-brand'>Apply</Link>
                <Link to="/status" className='navbar-brand'>Status</Link>
                // <li className='navbar-brand'><Accounts /></li>
              </ul>
          </div>
        </nav>
    );
  }
}

export default withRouter(Header);
