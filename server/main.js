import { Meteor } from 'meteor/meteor';
import Tabular from 'meteor/aldeed:tabular';

const Docs = new Mongo.Collection('docs');

Meteor.startup(async () => {
  await Docs.removeAsync({});
  Meteor.setTimeout(async function() {
    await Docs.insertAsync({_id: '1', keyA: 'doc 1'})
    await Docs.insertAsync({_id: '2', keyA: 'doc 2 (should not be visible)'})
  }, 1000);

  await new Tabular.Table({
    name: "Docs",
    collection: Docs,
    columns: [
      {data: "_id"},
      {data: "key1"},
    ],
    selector: async function(userId) {
      console.log('Selector on the server for user : ', userId)
      return {_id: '1'};
    }
  });
  
});




