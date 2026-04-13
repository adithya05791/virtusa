const db = require("../config/db");   // ← THIS LINE WAS MISSING

const User = {

  createUser: (name, email, password, role, callback) => {
    const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, password, role], callback);
  },

  findUserByEmail: (email, callback) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], callback);
  }

};

module.exports = User;