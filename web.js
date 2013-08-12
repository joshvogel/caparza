var express = require('express');
var http = require('http');
var path = require('path');

var app = express.createServer(express.logger());

//app.set('port', process.env.PORT || 8080);
//app.use(express.favicon());
//app.use(express.logger());
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
var fs = require('fs');
var inFile = "public/index.html";
var buffer = new Buffer(fs.readFileSync(inFile));


app.use( "/", express.static(__dirname + '/public'));

var Facebook = require('facebook-node-sdk');
var facebook = new Facebook({ appId: 'app_id', secret: 'app_secret'}).setAccessToken('app_token');



app.get('/', function(request,response){
    response.send(buffer.toString('utf-8'));
});


app.get('/status', function(req, res){
    facebook.api('/caparza/posts', { limit: 8 }, function(err, data) {
    var messages = data.data;

    for (var i=0, l=messages.length; i<l; i++) {

        if (messages[i].message) {

            res.write('<p style="text-align:left; font-size:12px"><b>Caparza:</b> ' + messages[i].message + '</p>');
        }
    }

        res.end();
    });

});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


