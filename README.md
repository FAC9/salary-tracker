# Salary tracker for FAC9

I have flung together a postgres db with an express.js back end that spews anonymised data into a template. We should start with our cohort but structure the data so other cohorts could potentially use this tool if they choose to.

At present there's no dynamic way to add details, nor is there even a users table. To come!

### Proposed tools (given our cohort's expertise)
- Postgres, currently hosted on ElephantSQL
- Express backend, ss rendering through Handlebars

### To run this locally
- Clone the repo
- Run `npm install`
- Rename config.copy to config.env
- Request the db_url from the repo admin (Lucy) and paste it into config.env
- Run `npm start` or `npm devStart`

Open localhost:4000/salaries/FAC9 in your browser
