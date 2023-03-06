const express = require("express");
const jwt = require("jsonwebtoken");
const usersRoute = express.Router();
const { UsersModule } = require("../Models/User.Model");
const { authenticate } = require("../Middlewares/authenticate");
const { login } = require("../Middlewares/Validetor");

const bcrypt = require("bcrypt");

//registered data using signup page
//if email already registered then redirected to login page

usersRoute.post("/signup", async (req, res) => {
  const {email, password } = req.body;
  try {
    if ( email && password ) {
      const cheak = await UsersModule.find({ email: email });
      if (cheak.length > 0) {
        res.status(401).json({ message: "Email already register" });
      } else {
        bcrypt.hash(password, 8, async (err, hash) => {
          const user = new UsersModule({
            email,
            password: hash,
          });
          await user.save();
          // res.send("Registered")
          res.status(201).json({ message: "Registered", user });
        });
      }
    }
  } catch (err) {
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

usersRoute.use(login);


//loging the data from login page

usersRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UsersModule.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "masai");

          res.status(201).json({
            msg: "Login Successfull",
            token: token,
            name: user[0].name,
            email: user[0].email,
          });
        } else {
          res.send("Wrong Credntials");
        }
      });
    } else {
      res.send("Wrong Credntials");
    }
  } catch (err) {
    res.status(401).json({
      error,
      message: "Something went wrong",
    });
  }
});

module.exports = {
  usersRoute,
};