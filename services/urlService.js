/**
 * Created by user on 9/19/16.
 */
var longToShortHash = {};
var shortToLongHash = {};

var getShortUrl=function(longUrl){
    if(longUrl.indexOf('http') ==-1){
        longUrl = "http://"+longUrl;
    }
    if(longToShortHash[longUrl] != null){
        return longToShortHash[longUrl];
    }else{
        var shortUrl = generateShortUrl();
        longToShortHash[longUrl] = shortUrl;
        shortToLongHash[shortUrl] = longUrl;
        return shortUrl;
    }
};

var generateShortUrl = function(){
  //return Object.keys(longToShortHash).length;
    //var number = Object.keys(longToShortHash).length;
    //var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //var arr=[];
    //do{
    //    mod = number % 62;
    //    number =(number - mod) /62;
    //    arr.unshift(chars[mod]);
    //}while(number);
    //return arr.join('');
    var id = Object.keys(longToShortHash).length + 1;
    var code = "abcdefghijklmnopqrstuvwxzy";
    code += code.toUpperCase();
    code += '0123456789';
    var shortUrl = "";
    while (id > 0) {
        shortUrl += code[(id - 1) % 62];
       id = parseInt(id / 62);
    }
    return shortUrl;

};

var getLongUrl = function(shortUrl) {
    return shortToLongHash[shortUrl];
};

module.exports = {
    getShortUrl: getShortUrl,
    getLongUrl: getLongUrl
};