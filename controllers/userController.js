const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addUser = (req, res) => {
  const { name, email } = req.body;
  User.createUser({ name, email }, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, name, email });
  });
};
