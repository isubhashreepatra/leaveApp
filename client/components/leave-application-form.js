import React, { Component } from 'react';


//render form
class LeaveApplicationForm extends Component {

  render() {

    return (
      <div className="jumbotron">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>From Date</label>
              <input type="date" className="form-control" placeholder="Start Date"/>
            </div>
            <div className="form-group col-md-6">
              <label>To Date</label>
              <input type="date" className="form-control" placeholder="End Date"/>
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col-md-6">
            <label>Reason</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <div className="dropdown">
                <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
                  Leave Type
                &nbsp;<span className="caret"></span>
                </button>
                <button type="submit" className="btn btn-primary pull-right">Submit</button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Sick</a> </li>
                  <li><a className="dropdown-item" href="#">Casual</a></li>
                  <li><a className="dropdown-item" href="#">Other</a></li>
                </ul>
              </div>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default LeaveApplicationForm;
