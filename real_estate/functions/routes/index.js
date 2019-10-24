var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  let realEstates = [];
  // Get data from API
  // Refine data
  res.render("index", { title: "Express", realEstates: realEstates });
});

module.exports = router;
