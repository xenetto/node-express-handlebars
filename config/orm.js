// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {
  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  insertOne: function(name, devoured, callback) {
    var s = "insert into " + tableName + "(burger_name, devoured) values(?, ?)";

    connection.query(s, [name, devoured], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method to execute the necessary MySQL commands in the controllers,
  // Again, we make use of the callback to grab a specific character from the database.
  // UPDATE burgers SET burger_name = "Chicken Burger (spicy)", devoured=true  WHERE id = 3
  updateOne: function(devoured, id, callback) { 

    var s = "UPDATE " + tableName + " SET devoured = ? where id = ?";

    connection.query(s, [devoured, id], function(err, result) {
      callback(result);
    });
  }
};

module.exports = orm;

