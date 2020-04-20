import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Leaves } from '../../imports/collections/leaves';

class LeavesList extends Component {

  handleRemoveClick(leave){
    Meteor.call('remove.leave', leave);
  }

  renderList(){
    return this.props.leaves.map(leave => {

      return (
        <div className="list-group" key={leave._id} style={{ margin: "20px 100px" }}>
          <div className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{leave.leaveType}
                <span className="pull-right">
                <small>{(new Date(leave.startDate)).toLocaleDateString()}</small>
                  &nbsp;<small>-</small>
                  &nbsp;
                <small>{(new Date(leave.endDate)).toLocaleDateString()}</small>
                </span>
              </h5>
              <p className="mb-1">{leave.reason}</p>
              <button className="btn btn-danger" onClick={() => this.handleRemoveClick(leave)}>Remove</button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
          <div>
            { this.props.leaves.length ?
                <ul>
                  { this.renderList() }
                </ul> :
                <div>
                  <ul className="list-group">
                    <div className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        Great! No leaves taken!
                      </div>
                    </div>
                  </ul>
                </div>
            }
          </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('leaves');
  return {
    leaves: Leaves.find({ employeeId: Meteor.userId() }, { sort: { createdAt: -1 } }).fetch()};
})(LeavesList);
