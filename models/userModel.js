const db = require('../config/db');

exports.getAllUsers = (callback) => {
  db.query('SELECT * FROM users', callback);
};

exports.createUser = (user, callback) => {
  db.query('INSERT INTO users SET ?', user, callback);
};
