var express = require('express'),
    multer = require('multer');

var upload = multer();

var app = express();
app.set('port', process.env.PORT ||  8080);


app.listen(app.get('port'));
