var config = require("./config");

var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter(config.hipchat.APIKey);

var xbmc = require('xbmc-notify');
xbmc.config(config.xbmc);

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
