import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  //this.subscribe('pub1', 'Hello');
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

const Docs = new Mongo.Collection('docs');

import Tabular from 'meteor/aldeed:tabular';

new Tabular.Table({
  name: "Docs",
  collection: Docs,
  columns: [
    {data: "_id", title: "ID"},
    {data: 'keyA', title: "Col 1"}
  ]
});
