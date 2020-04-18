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
              <input type="email" className="form-control" placeholder="Start Date"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">To Date</label>
              <input type="password" className="form-control" placeholder="End Date"/>
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col-md-6">
            <label>Reason</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Leave Type: 
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LeaveApplicationForm;
