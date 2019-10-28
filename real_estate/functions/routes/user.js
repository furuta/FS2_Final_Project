var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.render("user", { title: "User Page" });
});

router.get("/signin", (req, res, next) => {
  res.render("signin", { title: "Signin Page" });
});

router.get("/logout", (req, res, next) => {
  // Logout function
  // Redirect login page
  firebase.auth().signOut();
  res.send("respond with a resource");
});

module.exports = router;
