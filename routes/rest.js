/**
 * Created by user on 9/19/16.
 */
var express = require('express');
var router = express.Router();

var urlService= require('../services/urlService');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.post("/urls", jsonParser, function(req,res){
   var longUrl  = req.body.longUrl;
   var shortUrl = urlService.getShortUrl(longUrl);
   res.json({
      shortUrl:shortUrl,
      longUrl:longUrl
   });
});

module.exports = router;
