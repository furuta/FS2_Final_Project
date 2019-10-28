var express = require("express");
var router = express.Router();
var unirest = require("unirest");
const request = require("request-promise");

/* GET home page. */
router.get("/", (req, res, next) => {
  let realEstates = [];
  // Refine data
  res.render("index", { title: "Express", realEstates: realEstates });
});

module.exports = router;
