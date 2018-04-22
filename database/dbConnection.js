const {Pool} = require('pg');
const url = require('url');
const config = require('../config');

if (!config.DB_URL) {
  throw new Error('Environment variable DB_URL must be set');
}

let params;
if (process.env.NODE_ENV === 'production') {
  params = url.parse(process.env.DB_URL);
} else {
  params = url.parse(config.DB_URL);
}

const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: config.DB_MAX_CONNECTIONS || 2,
  ssl: false,
};

if (username) { options.user = username; }
if (password) { options.password = password; }

module.exports = new Pool(options);
