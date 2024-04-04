import { Meteor } from 'meteor/meteor';


const Docs = new Mongo.Collection('docs');

Meteor.startup(async () => {

  await Docs.removeAsync({})

  Docs.after.update(async function(userId, doc, fieldNames, modifier, options) {
    console.log('Docs.after.update > hook trigger : ', doc)
  });
  
  Docs.after.insert(async function(userId, doc) {
    console.log('Docs.after.insert > hook trigger : ', doc)
  });

  Meteor.setTimeout(async function() {
    console.log('inserting a doc')
    await Docs.insertAsync({test: 'hook'})
  }, 2000);
  
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
