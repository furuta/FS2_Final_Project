var express = require("express");
var router = express.Router();
var unirest = require("unirest");
const request = require("request-promise");
const axios = require('axios');

/* GET home page. */
router.post("/", (req, res, next) => {
  console.log(req.body.zipcode)
  let title = `You have searched: ${req.body.zipcode}`;
  let cssFiles = ["css/about.css", "css/responsive.css"];
  let jsFiles = ["js/findData.js"];
  let activePage = "search";

  axios({
    method: 'get',
    url: 'https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address',
    headers: {
      'Accept': 'application/json',
      'APIKey': 'deb3cab71e35fa3ff81d6912e9f656ad'
    },
    params: {
      "postalcode": req.body.zipcode
      
    }
  }).then(result => {
    let stuff = result.data.property;
    
    console.log(stuff[0].address);
    res.render("search", {
        title: title,
        cssFiles: cssFiles,
        jsFiles: jsFiles,
        activePage: activePage,
        data: stuff
      });
  }).catch(error => {
    console.log(error);
  });
  
  
});

module.exports = router;