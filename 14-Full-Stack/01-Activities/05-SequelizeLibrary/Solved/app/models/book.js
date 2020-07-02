// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const DataTypes = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
const Book = sequelize.define("book", {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  genre: DataTypes.STRING,
  pages: DataTypes.INTEGER
});

// Syncs with DB
Book.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Book;
