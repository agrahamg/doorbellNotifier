var config = require("./config");

var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter(config.hipchat.APIKey);

var xbmc = require('xbmc-notify');
xbmc.config(config.xbmc);



var express = require('express')
var app = express()

app.get('/', function (req, res) {
  hipchatter.notify(config.hipchat.roomName,
    {
      message: 'Ring Ring Ring',
      color: 'green',
      token: config.hipchat.roomAPIKey
    }, function(err){
      if (err == null) {
        console.log('Successfully notified the room.')
      }
      else{
        console.log(err);
      };
    });
    xbmc.notify("Ring ring ring");

    res.end();
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
