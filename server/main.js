import { Meteor } from 'meteor/meteor';
import { Leaves } from '../imports/collections/leaves';

Meteor.startup(() => {
  Meteor.publish('leaves', function () {
    return Leaves.find({});
  });
});
