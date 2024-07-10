var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');

var app = express();
var mjpegurl = process.env.MJPEG_URL;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/index.jpg', new MjpegProxy(mjpegurl).proxyRequest);
app.listen(process.env.MJPEG_PORT);
