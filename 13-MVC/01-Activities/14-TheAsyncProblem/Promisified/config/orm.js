const connection = require("../config/connection.js");

const orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
};

module.exports = orm;
