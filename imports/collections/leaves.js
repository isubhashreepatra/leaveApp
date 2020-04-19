import { Mongo } from 'meteor/mongo';

Meteor.methods({

    'insert.leaves' : function (leave) {
        console.log('trying to insert into DB', leave);
        
        return Leaves.insert({
            createdAt: new Date(),
            startDate: leave.startDate,
            endDate: leave.endDate,
            reason: leave.reason,
            leaveType: leave.leaveType,
            status: "pending",
            employeeId: null
        });
    }


});


export default Leaves = new Mongo.Collection('leaves');