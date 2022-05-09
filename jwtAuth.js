const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("./db");
const validInfo = require("./validInfo");
const jwtGenerator = require("./jwtGenerator");
const authorize = require("./authorize");

router.post("/login", validInfo, async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        email
      ]);
      if (user.rows.length === 0) {
        return res.status(401).json("Λάθος στοιχεία!");
      }

      const validPassword = await bcrypt.compare(password, user.rows[0].password);

      if (!validPassword) {
        return res.status(401).json("Λάθος email ή κωδικός!");
      }

      /*if (password !== user.rows[0].user_password){
        return res.status(401).json("Λάθος στοιχεία!");
      }*/

      const jwtToken = jwtGenerator(user.rows[0].user_id);
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
  
  router.post("/verify", authorize, (req, res) => {
    try {
      res.json(true);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
  
  module.exports = router;