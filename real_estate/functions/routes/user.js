var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.render("user", { title: "User Page" });
});

router.get("/signin", (req, res, next) => {
  let cssFiles = [
    "/css/main_styles.css",
    "/css/responsive.css",
    "/css/signin.css"
  ];
  let jsFiles = [
    "https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js",
    "/js/signin.js"
  ];
  res.render("signin", {
    title: "Signin Page",
    cssFiles: cssFiles,
    jsFiles: jsFiles
  });
});

router.get("/logout", (req, res, next) => {
  // Logout function
  // Redirect login page
  firebase.auth().signOut();
  res.send("respond with a resource");
});

module.exports = router;
