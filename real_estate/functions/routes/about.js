var express = require("express");
var router = express.Router();

/* GET users listing. */
let title = "About us";
router.get("/", (req, res, next) => {
  let cssFiles = ["css/about.css", "css/about_responsive.css"];
  let jsFiles = ["js/about.js"];
  let activePage = "about";

  // Refine data
  res.render("about", {
    title: title,
    cssFiles: cssFiles,
    jsFiles: jsFiles,
    activePage: activePage
  });
});

module.exports = router;
