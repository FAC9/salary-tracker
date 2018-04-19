const fs = require('fs');

(() => {
  console.log('build database was called');
  const connection = require('./dbConnection');

  const sql = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString();

  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Database was built');
    }
  });
})();
