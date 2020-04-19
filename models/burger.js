// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
      orm.selectAll(function(result) {
        callback(result);
      });
    },
    // The variables cols and vals are arrays..
    insertOne: function(name, devoured, callback) {
      orm.insertOne(name, devoured, function(result) {
        callback(result);
      });
    },
    updateOne: function(devoured, id, callback) {
      orm.updateOne(devoured, id, function(result) {
        callback(result);
      });
    },
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;