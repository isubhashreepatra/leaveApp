import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'insert.leaves' : function (leave) {
        return Leaves.insert({
            createdAt: new Date(),
            startDate: leave.startDate,
            endDate: leave.endDate,
            reason: leave.reason,
            leaveType: leave.leaveType,
            status: "pending",
            employeeId: leave.employeeId,
            employeeName: leave.employeeName
        });
    },

    'remove.leave' : function (leave) {
      return Leaves.remove(leave);
    }
});


export const Leaves = new Mongo.Collection('leaves');
