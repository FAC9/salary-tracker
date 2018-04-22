const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const app = express();
const queries = require('./queries');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    test: 'hello world'
  });
});

app.get('/salaries/:cohort', (req, res) => {
  let cohort = req.params.cohort;
  queries.getSalariesByCohort(cohort, function (err, salaries) {
    if (err) console.log(err);
    else {
      console.log('data: ', salaries);
      // salaries.sort((a, b) => b.salary - a.salary);
      res.render('index.hbs', {salaryData:salaries});
    }
  });
});


module.exports = app;
