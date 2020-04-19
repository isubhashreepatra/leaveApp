import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

//render form
class LeaveApplicationForm extends Component {
  handleSubmitEvent(event) {
    event.preventDefault();
    var startDate = this.refs.startDate.value;
    var endDate = this.refs.endDate.value;
    var reason = this.refs.reason.value;
    var selectedOption = this.refs.leaveType;
    var leaveType = selectedOption.options[selectedOption.selectedIndex].value;

    var leave = {startDate, endDate, reason, leaveType}
    
    Meteor.call('insert.leaves', leave, (error) => {
      if(error) {
        console.log(error);
        return;
      } else {
        console.log('Insert successful');        
      }
    });


  };

  render() {
    return (
      <div className="jumbotron">
        <form >
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>From Date</label>
              <input ref="startDate" type="date" className="form-control" placeholder="Start Date"/>
            </div>
            <div className="form-group col-md-6">
              <label>To Date</label>
              <input ref="endDate" type="date" className="form-control" placeholder="End Date"/>
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col-md-6">
            <label>Reason</label>
            <input ref="reason" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
            <label>Leave Type</label>
              <select ref="leaveType" className="form-control" >
                <option className="dropdown-item">Sick</option>
                <option className="dropdown-item">Casual</option>
                <option className="dropdown-item">Other</option>
              </select>
            </div>
            </div>
         
          <div className="float-right"><button type="submit" className="btn btn-primary" onClick={ this.handleSubmitEvent.bind(this) }>Submit</button></div>
        </form>
      </div>
    );
  }
}

export default LeaveApplicationForm;
