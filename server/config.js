const DURATION_SECOND = 1000;
const DURATION_MINUTE = DURATION_SECOND * 60;

const JWT_TOKEN_EXPIRE = '30m';
const JWT_COOKIE_EXPIRE = DURATION_MINUTE * 30;

const DB_CONFIG = { host: 'localhost', database: 'namiroku' };

module.exports = {
  JWT_TOKEN_EXPIRE,
  JWT_COOKIE_EXPIRE,
  DB_CONFIG,
};
