var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  // Login check
  // Redirect login page if logout
  // Get user info
  res.send("respond with a resource");
});

router.get("/signup", (req, res, next) => {
  res.send("signup form");
});

router.post("/signup", (req, res, next) => {
  // signup function
  // Redirect user pate after signup
  res.send("signup function");
});

router.get("/login", (req, res, next) => {
  res.send("login form");
});

router.post("/login", (req, res, next) => {
  // Login function
  // Redirect user pate after login
  res.send("login function");
});

router.get("/logout", (req, res, next) => {
  // Logout function
  // Redirect login page
  res.send("respond with a resource");
});

module.exports = router;
