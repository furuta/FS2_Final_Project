var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/{id}", (req, res, next) => {
  let realEstate;
  // Get data from API by id
  // Refine data
  res.render("house", { title: "Express", realEstate: realEstate });
});

module.exports = router;
