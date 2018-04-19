const dbConn = require('../database/dbConnection.js');

const queries = {};

queries.getSalariesByCohort = (cohort, cb) => {
  dbConn.query(
    'SELECT company_type, job_title, stack, salary FROM salaries WHERE cohort=$1', [cohort], (err, data) => {
      if (err) cb(err);
      else cb(null, data.rows);
  });
};

module.exports = queries;
