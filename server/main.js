import { Meteor } from 'meteor/meteor';

Meteor.startup(async () => {
  // code to run on server at startup
  await Meteor.users.removeAsync({});
  try {
    const userId = await Accounts.createUserAsync({
      email: 'john@doe.com',
    });
    const randomEmail = (Math.random() + 1).toString(36).substring(7) + '@mail.com';
    Accounts.addEmail(userId, randomEmail, true);
  }
  catch (e) {
    console.error(e);
  }
  
});

import { check, Match } from 'meteor/check';
Meteor.publish('pub1', function(taskId, options) {
  check(taskId, String);
  check(options, Match.Optional({
    projection: Match.Optional(Object),
    debugText: Match.Optional(String),
  }));
  this.unblock();
  console.log('taskId : ', taskId)
  console.log('options : ', options)
  return Meteor.users.find({});
});
