var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService');
var statsService = require('../services/statsService');
var path = require('path');
//*表示一切
router.get("*", function (req, res){
	//从1开始，去掉/符号
    var shortUrl = req.originalUrl.slice(1);

    urlService.getLongUrl(shortUrl,function(url){
    	if(url){
    		res.redirect(url.longUrl);
    		statsService.logRequest(shortUrl, req);

    	}else{
    		res.sendFile("404.html", { root: path.join(__dirname, '../public/views/')});
    	}
    });
});

module.exports = router;